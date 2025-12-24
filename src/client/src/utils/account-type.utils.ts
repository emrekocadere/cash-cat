import { AccountType } from '@/types/model.types';

export const accountTypeMeta: Record<
  AccountType,
  { label: string; description: string; tone: string }
> = {
  [AccountType.Cash]: {
    label: 'Cash',
    description: 'Physical cash you carry with you.',
    tone: 'from-amber-400/30 to-amber-500/30',
  },
  [AccountType.BankAccount]: {
    label: 'Bank Account',
    description: 'Bank accounts for transfers and card transactions.',
    tone: 'from-sky-400/30 to-sky-500/30',
  },
  [AccountType.CreditCard]: {
    label: 'Credit Card',
    description: 'Credit card accounts charged after purchases.',
    tone: 'from-rose-400/30 to-rose-500/30',
  },
  [AccountType.Savings]: {
    label: 'Savings Account',
    description: 'Long-term accounts for investments and savings.',
    tone: 'from-emerald-400/30 to-emerald-500/30',
  },
};

export const getAccountTypeLabel = (type: AccountType) => accountTypeMeta[type]?.label ?? type;
