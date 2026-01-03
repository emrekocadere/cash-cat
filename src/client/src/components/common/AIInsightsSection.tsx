import { AIInsightCard } from './AIInsightCard';

interface AIInsight {
  id: string;
  title: string;
  summary: string;
  fullContent: string;
  icon?: 'lightbulb' | 'chart' | 'warning' | 'info';
  variant?: 'primary' | 'success' | 'warning' | 'info';
}

interface AIInsightsSectionProps {
  insights: AIInsight[];
  loading?: boolean;
}

export const AIInsightsSection = ({
  insights,
  loading = false
}: AIInsightsSectionProps) => {
  if (loading) {
    return (
      <div className="h-32 rounded-xl bg-slate-800/30 border border-white/5 animate-pulse" />
    );
  }

  if (!insights || insights.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {insights.map((insight) => (
        <AIInsightCard
          key={insight.id}
          title={insight.title}
          summary={insight.summary}
          fullContent={insight.fullContent}
          icon={insight.icon}
          variant={insight.variant}
        />
      ))}
    </div>
  );
};
