import { useQuery } from '@tanstack/react-query';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { AccountsHeroStats } from '@/components/accounts/AccountsHeroStats';
import { AccountListSection } from '@/components/accounts/AccountListSection';
import { AddAccountModal } from '@/components/accounts/AddAccountModal';


export const AccountsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { data: accounts = [], isLoading } = useQuery({
    queryKey: ['accounts'],
    queryFn: () => accountsApi.getAll(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <main className="ml-64">
        <div className="max-w-[1400px] mx-auto px-8 py-12 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Accounts</h1>
              <p className="text-gray-400">
                Track your finances with multiple accounts. Each account can be customized with a name and type (Bank Card, Credit Card, Cash, etc.).
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/30"
            >
              Add Account
            </button>
          </div>

          <AccountsHeroStats
            totalBalance={0}
            totalAccounts={0}
          />

          <AccountListSection accounts={accounts} isLoading={isLoading} currencies={{}} />
        </div>

        <Footer />
      </main>

 
    </div>
  );
};