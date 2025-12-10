interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export const FeatureCard = ({ icon, title, description, bgColor, iconColor }: FeatureCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all">
      <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
