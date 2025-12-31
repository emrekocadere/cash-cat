using WalletUp.Application.Auth.Commands.Register;
using WalletUp.Application.Identity.Commands.Login;
using WalletUp.Application.Identity.Dtos;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Identity;

public interface IIdentityService
{
    Task<ResultT<TokenDto>>  Register(RegisterCommand command);
    Task<ResultT<TokenDto>>  Login(LoginCommand command);
}