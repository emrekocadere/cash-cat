import { SelectCombobox } from '@/components/SelectCombobox';
import type { Currency } from '@/types/model.types';

interface CurrencyStepProps {
  currencies: Currency[];
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export const CurrencyStep = ({ currencies, selectedCurrency, onCurrencyChange }: CurrencyStepProps) => {
  return (
    <div className="flex-1">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Choose Your Currency</h2>
        <p className="text-gray-400">Select your primary currency</p>
      </div>

      <div className="max-w-md mx-auto">
        {currencies.length > 0 ? (
          <SelectCombobox
            options={currencies.map((curr) => ({
              value: curr.id,
              label: curr.iso4217Code,
            }))}
            value={selectedCurrency}
            onChange={onCurrencyChange}
            placeholder="Select currency..."
            icon="💱"
          />
        ) : (
          <div className="text-center text-gray-400 py-8">
            <div className="animate-spin w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            Loading currencies...
          </div>
        )}
      </div>
    </div>
  );
};
