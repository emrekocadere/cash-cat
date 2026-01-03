import { useState, useEffect } from 'react';
import type { AIInsight } from '@/types/ai.types';

interface UseAIInsightsOptions {
  pageType: 'dashboard' | 'accounts' | 'transactions' | 'goals' | 'account-detail';
  accountId?: string;
  enabled?: boolean;
}


const MOCK_INSIGHT: AIInsight = {
  id: '1',
  title: 'Smart Analysis',
  summary: 'Your spending increased by 15% this month. There are savings opportunities.',
  fullContent: 'Your spending increased by 15% compared to last month. The biggest increase is in the food and dining category. You can control this increase by creating a weekly budget plan. By reducing entertainment and dining out expenses by 20%, you can save 500₺ monthly.',
  icon: 'lightbulb',
  variant: 'info',
  pageType: 'dashboard',
  createdAt: new Date().toISOString(),
};

export const useAIInsights = ({ pageType, accountId, enabled = true }: UseAIInsightsOptions) => {
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    const fetchInsights = async () => {
      try {
        setLoading(true);
        setError(null);


        await new Promise(resolve => setTimeout(resolve, 600));
        setInsights([MOCK_INSIGHT]);
      } catch (err) {
        setError('Failed to load AI insights');
        console.error('Error fetching AI insights:', err);
        setInsights([MOCK_INSIGHT]);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [pageType, accountId, enabled]);

  const refreshInsights = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      setInsights([MOCK_INSIGHT]);
    } catch (err) {
      console.error('Error refreshing AI insights:', err);
    } finally {
      setLoading(false);
    }
  };

  return { insights, loading, error, refreshInsights };
};
