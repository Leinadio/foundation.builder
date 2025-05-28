"use client"

import React, { useState, useCallback } from 'react';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TOTAL_STEPS } from './constants';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { createWorkflow } from '@/services/workflows';
import { useAuth } from '@/context/Auth/AuthContext';
import { Workflow } from '@/models/Workflow';
import { updateUserWorkflows, UserData, UserWorkflow } from '@/services/users';
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Composant principal de la page d'accueil
 */
export const HomeContent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputError, setInputError] = useState(false);
  const [formResponses, setFormResponses] = useState<string[]>(["", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, locale } = useClientTranslation('homeContent');

  const router = useRouter();
  const { user } = useAuth();

  const handleWorkflowCreation = useCallback(async (responses: string[], user: UserData) => {
    if (!user.uid) {
      throw new Error("L'utilisateur n'a pas d'ID");
    }
    const initialWorkflow: Workflow = await createWorkflow({
      name: `${responses[5] || "Nouvelle idée"}`,
      userId: user.uid,
      responses: responses.map((response, index) => ({
        question: t(`steps.questions.${index}`),
        response
      })),
    });
    
    const workflow: UserWorkflow = {
      id: initialWorkflow.id,
      name: initialWorkflow.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    await updateUserWorkflows(user.uid, workflow);
    
    return {
      workflow: initialWorkflow,
    }
  }, [t]);

  const onFormComplete = async (responses: string[]) => {
    if (!user) {
      setIsLoading(true);
      return;
    }
    try {
      setIsLoading(true);
      const { workflow } = await handleWorkflowCreation(responses, user);
      if (analytics) {
        logEvent(analytics, 'create_report');
      }
      router.push(`/${locale}/app/${workflow.id}`);
    } catch {
      setIsLoading(false);
    }
  };

  const getStepText = () => {
    return t(`steps.questions.${currentStep - 1}`);
  }

  const getPlaceholderText = () => {
    return t(`steps.placeholders.${currentStep - 1}`);
  }

  const handleInputChange = (value: string) => {
    const newResponses = [...formResponses];
    newResponses[currentStep - 1] = value;
    setFormResponses(newResponses);
    resetError(value);
  }

  const resetError = (value: string) => {
    if (inputError && value.trim() !== "") {
      setInputError(false);
    }
  }

  const handlePreviousStep = () => {
    setInputError(false);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      return;
    }
  }
  
  const isLessThanTotalSteps = (): boolean => {
    return currentStep < TOTAL_STEPS;
  }

  const isLastStep = (): boolean => {
    return currentStep === TOTAL_STEPS;
  }

  const handleNextStep = () => {
    if (isEmptyForm()) {
      setInputError(true);
      return;
    }
    
    setInputError(false);
    
    if (isLessThanTotalSteps()) {
      setCurrentStep(currentStep + 1);
      return;
    }

    if (isLastStep()) {
      onFormComplete(formResponses);
    }
  }

  const isEmptyForm = () => {
    return !formResponses[currentStep - 1] || formResponses[currentStep - 1].trim() === ""
  }

  const displayButton = () => {
    if (isLoading) {
      return (
        <Button 
          className="w-fit text-black"
          disabled
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t('buttons.loading')}
        </Button>
      )
    }
    return (
      <Button 
        className="w-fit text-black hover:bg-amber-200" 
        onClick={handleNextStep}
      >
        {t('buttons.next')}
        <ChevronRight />
      </Button>
    )
  }

  const displayInputError = () => {
    if (!inputError) return null;
    return (
      <p className="text-red-500 text-sm mb-2">{t('inputError')}</p>
    )
  }

  const displayValidateForm = () => {
    // if (!showForm) return null;
    return (
      <Alert className="w-full mb-4">
        <p className="text-left text-sm font-medium w-full">{t('steps.title', { currentStep: currentStep.toString(), totalSteps: TOTAL_STEPS.toString() })}</p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center mb-2">
            <p className="text-left text-base font-medium">{getStepText()}</p>
          </div>
          <Textarea
            key={`textarea-step-${currentStep}`}
            placeholder={getPlaceholderText()}
            className={`min-h-32 mb-4 ${inputError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            value={formResponses[currentStep - 1]}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          {displayInputError()}
        </div>
        <div className="flex justify-between w-full">
          <Button 
            variant="ghost" 
            onClick={handlePreviousStep} 
            className="w-fit text-red-500 hover:text-red-600"
            disabled={isLoading}
          >
            <ChevronLeft />
            {t('buttons.previous')}
          </Button>
          <div className="flex flex-col items-end gap-2">
            {displayButton()}
          </div>
        </div>
      </Alert>
    )
  }

  const displayInformations = () => {
    return (
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="link" className="self-end p-0 h-auto text-xs text-gray-500">
              {t('tooltip.why_info')}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs" side="bottom" sideOffset={12}>
            {t('tooltip.content')}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center p-4 h-full">
      <div className="w-full max-w-[536px] flex flex-col justify-center items-center px-4 md:px-0 ">
        <div className="flex flex-col w-full mt-4 gap-4">
          <div className="flex flex-col">
            {displayValidateForm()}
            {displayInformations()}
          </div>
        </div>
      </div>
    </div>
  );
}; 