'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/context/Auth/AuthContext';
import { incrementUsedReports } from '@/services/users';
import { setWorkflowFullUnlock } from '@/services/workflows';
import { LockOpen } from 'lucide-react';
import Link from 'next/link';
import { useClientTranslation } from '@/hooks/useClientTranslation';

interface UnlockReportButtonProps {
  onUnlock: () => void;
  workflowId: string;
}

export default function UnlockReportButton({ onUnlock, workflowId }: UnlockReportButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const { user } = useAuth();
  const { t, locale } = useClientTranslation('unlockReport');

  const handleUnlock = async () => {
    if (!user || !user.uid) return;
    
    setIsUnlocking(true);
    try {
      // Incrémenter le compteur de rapports utilisés
      await incrementUsedReports(user.uid);
      // Mettre à jour le statut de déverrouillage du workflow
      await setWorkflowFullUnlock(workflowId);
      // Appeler la fonction de déverrouillage passée en props
      onUnlock();
      setIsDialogOpen(false);
    } catch {
      return;
    } finally {
      setIsUnlocking(false);
    }
  };

  // Vérifier si l'utilisateur a atteint la limite de rapports
  const hasReachedLimit = user?.usedReports !== undefined && 
                         user?.purchasedReports !== undefined && 
                         user.usedReports >= user.purchasedReports;

  return (
    <>
      <div className="flex items-center gap-4">
        {hasReachedLimit && (
          <p className="text-sm text-muted-foreground mt-2 hidden xl:block">
            {t('limitReached')}
            <Link href={`/${locale}/app/pricing`} className="ml-1 text-primary hover:underline">
              {t('buyMore')}
            </Link>
          </p>
        )}
         <Button 
          onClick={() => setIsDialogOpen(true)} 
          disabled={hasReachedLimit}
          className="flex items-center gap-2 hover:bg-amber-200"
        >
          <LockOpen className="h-4 w-4" />
          {t('button')}
        </Button>
      </div>

      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('dialog.title')}</DialogTitle>
            <DialogDescription>
              {t('dialog.description', { reports: String(user?.purchasedReports || 0) })}
              {user && user.usedReports !== undefined && user.purchasedReports !== undefined && (
                <>
                  <br/>
                  <span className="mt-2">
                    {t('dialog.remainingReports', { count: String(user.purchasedReports - 1) })}
                  </span>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>{t('dialog.cancel')}</Button>
            <Button onClick={handleUnlock} disabled={isUnlocking} className="hover:bg-amber-200">
              {isUnlocking ? t('dialog.unlocking') : t('dialog.confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
} 