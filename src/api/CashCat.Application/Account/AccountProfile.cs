using AutoMapper;
using CashCat.Application.Account.Commands.CreateAccount;
using CashCat.Application.Account.Dtos;

namespace CashCat.Application.Account;

public class AccountProfile:Profile
{
    public AccountProfile()
    {
        CreateMap<CreateAccountCommand,Domain.Entities.Account>();
        CreateMap<Domain.Entities.Account,AccountDto>();
    }
}