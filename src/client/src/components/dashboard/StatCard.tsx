interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  borderHoverColor: string;
  subtitleColor: string;
}

export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  iconBgColor,
  iconColor,
  borderHoverColor,
  subtitleColor,
}: StatCardProps) => {
  return (
    <div className={`bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-${borderHoverColor} transition-all`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`}>
          <div className={`w-6 h-6 ${iconColor}`}>
            {icon}
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className={`${subtitleColor} text-sm mt-2`}>{subtitle}</p>
    </div>
  );
};
