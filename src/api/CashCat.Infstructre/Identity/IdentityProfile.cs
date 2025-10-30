using AutoMapper;
using CashCat.Application.Auth.Commands.Register;
using CashCat.Infstructre.Identity.Models;

namespace CashCat.Infstructre.Identity;

public class IdentityProfile : Profile
{
    public IdentityProfile()
    {
        CreateMap<RegisterCommand,ApplicationUser>();
    }
}