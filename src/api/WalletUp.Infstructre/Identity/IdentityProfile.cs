using AutoMapper;
using WalletUp.Application.Auth.Commands.Register;
using WalletUp.Infstructre.Identity.Models;

namespace CashCat.Infstructre.Identity;

public class IdentityProfile : Profile
{
    public IdentityProfile()
    {
        CreateMap<RegisterCommand,ApplicationUser>();
    }
}