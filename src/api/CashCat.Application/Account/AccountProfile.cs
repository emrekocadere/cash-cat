using AutoMapper;
using CashCat.Application.Account.Commands.CreateAccount;

namespace CashCat.Application.Account;

public class AccountProfile:Profile
{
    public AccountProfile()
    {
        CreateMap<CreateAccountCommand,Domain.Entities.Account>();
    }
}