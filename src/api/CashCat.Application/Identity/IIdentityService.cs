using CashCat.Application.Auth.Commands.Register;
using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;

namespace CashCat.Application.Identity;

public interface IIdentityService
{
    Task<ResultT<TokenDto>>  Register(RegisterCommand command);
}