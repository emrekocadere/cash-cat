using AutoMapper;
using CashCat.Application.Account.Commands.CreateAccount;
using CashCat.Application.Account.Dtos;
using CashCat.Domain.Entities;

namespace CashCat.Application.Account;

public class AccountProfile:Profile
{
    public AccountProfile()
    {
        CreateMap<CreateAccountCommand,Domain.Entities.Account>();
        CreateMap<Domain.Entities.Account,AccountDto>()
            .ForMember(dest => dest.AccountType, opt => opt.MapFrom(src => src.AccountType))
            .ForMember(dest => dest.Currency, opt => opt.MapFrom(src => src.Currency));
        
        
        CreateMap<AccountType,AccountTypeDto>();
    }
}