type AccountsHeroStatsProps = {
  totalBalance: number;
  totalAccounts: number;
};

export const AccountsHeroStats = ({ totalBalance, totalAccounts }: AccountsHeroStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
        <p className="text-sm uppercase text-gray-400 tracking-[0.2em]">Total Balance</p>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold text-white">${totalBalance.toFixed(2)}</p>
        </div>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
        <p className="text-sm uppercase text-gray-400 tracking-[0.2em]">Accounts</p>
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold text-white">{totalAccounts}</p>
        </div>
      </div>
    </div>
  );
};



