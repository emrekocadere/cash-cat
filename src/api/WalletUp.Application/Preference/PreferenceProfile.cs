using WalletUp.Application.Preference.Commands.CreatePreference;

namespace WalletUp.Application.Preference;

public class PreferenceProfile:AutoMapper.Profile
{
    public PreferenceProfile()
    {
        CreateMap<CreatePreferenceCommand, Domain.Entities.Preference>();
            
    }
}