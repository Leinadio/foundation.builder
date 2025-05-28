"use client"

import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import Link from 'next/link';
import { NodeType } from "@/services/idea-validation/api";
import { useWorkflowActions } from "@/context/WorkflowActions/WorkflowActionsContext";
import { useClientTranslation } from '@/hooks/useClientTranslation';

export function ToolSidebar() {
  const { activeSection } = useWorkflowActions();
  const { t } = useClientTranslation('toolSidebar');

  const scrollToSection = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Sidebar side="right" collapsible="none" className="sticky hidden lg:flex top-0 h-svh border-l">
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>{t('summary')}</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('general')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton asChild>
                    <Link href={`#${NodeType.summaryIdeas}`} onClick={scrollToSection(NodeType.summaryIdeas)}>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className={`${activeSection === NodeType.summaryIdeas ? 'text-blue-500' : 'text-gray-500'}`}>
                          {t('overview')}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Validate Idea Section */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('sections.validateIdea.title')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Object.entries(NodeType).filter(([key]) => 
                  ['identified_problem', 'target_audience', 'target_existing_solutions', 'why_now', 
                   'early_signs_of_interest', 'risk_of_false_positive', 'key_advice_before_next_step'].includes(key)
                ).map(([key, value]) => (
                  <SidebarMenuSubItem key={value}>
                    <SidebarMenuSubButton asChild className="h-12">
                      <Link href={`#${value}`} onClick={scrollToSection(value)}>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className={`${activeSection === value ? 'text-blue-500' : 'text-gray-500'}`}>
                            {t(`sections.validateIdea.items.${key}`)}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Build and Launch Section */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('sections.buildAndLaunch.title')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Object.entries(NodeType).filter(([key]) => 
                  ['simplest_mvp_version', 'core_feature_to_build', 'what_to_ignore_initially'].includes(key)
                ).map(([key, value]) => (
                  <SidebarMenuSubItem key={value}>
                    <SidebarMenuSubButton asChild className="h-12">
                      <Link href={`#${value}`} onClick={scrollToSection(value)}>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className={`${activeSection === value ? 'text-blue-500' : 'text-gray-500'}`}>
                            {t(`sections.buildAndLaunch.items.${key}`)}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Find Users Section */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('sections.findUsers.title')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Object.entries(NodeType).filter(([key]) => 
                  ['where_to_find_target', 'hook_to_test', 'where_to_launch', 
                   'marketing_strategy', 'direct_outreach_strategy'].includes(key)
                ).map(([key, value]) => (
                  <SidebarMenuSubItem key={value}>
                    <SidebarMenuSubButton asChild className="h-12">
                      <Link href={`#${value}`} onClick={scrollToSection(value)}>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className={`${activeSection === value ? 'text-blue-500' : 'text-gray-500'}`}>
                            {t(`sections.findUsers.items.${key}`)}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Monetization Section */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('sections.monetization.title')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Object.entries(NodeType).filter(([key]) => 
                  ['pricing_strategy', 'natural_business_model', 'psychological_pricing',
                   'key_purchase_trigger', 'existing_solutions_comparison'].includes(key)
                ).map(([key, value]) => (
                  <SidebarMenuSubItem key={value}>
                    <SidebarMenuSubButton asChild className="h-12">
                      <Link href={`#${value}`} onClick={scrollToSection(value)}>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className={`${activeSection === value ? 'text-blue-500' : 'text-gray-500'}`}>
                            {t(`sections.monetization.items.${key}`)}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>

            {/* Improve and Iterate Section */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="hover:bg-transparent cursor-default active:bg-transparent">
                <span className="font-medium">
                  {t('sections.improveAndIterate.title')}
                </span>
              </SidebarMenuButton>
              <SidebarMenuSub>
                {Object.entries(NodeType).filter(([key]) => 
                  ['expected_user_feedback', 'adoption_barriers', 'what_to_keep_or_kill',
                   'minimal_feedback_tracking', 'light_pivot_idea', 'mid_term_vision'].includes(key)
                ).map(([key, value]) => (
                  <SidebarMenuSubItem key={value}>
                    <SidebarMenuSubButton asChild className="h-12">
                      <Link href={`#${value}`} onClick={scrollToSection(value)}>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className={`${activeSection === value ? 'text-blue-500' : 'text-gray-500'}`}>
                            {t(`sections.improveAndIterate.items.${key}`)}
                          </span>
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
} 