using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Identity.Commands.Login;

public class LoginCommand: IRequest<ResultT<TokenDto>>
{
        public required string Email { get; set; }
        public required string Password { get; set; }
}