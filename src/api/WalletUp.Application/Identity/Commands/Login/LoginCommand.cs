using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Identity.Dtos;

namespace WalletUp.Application.Identity.Commands.Login;

public class LoginCommand: IRequest<ResultT<TokenDto>>
{
        public required string Email { get; set; }
        public required string Password { get; set; }
}