using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Identity.Dtos;

namespace WalletUp.Application.Auth.Commands.Register;

public class RegisterCommand:IRequest<ResultT<TokenDto>>
{
    public required string
        Email { get; set; } // benim buraya required yazmam ile [required] yazmama arasıda ne farkj var

    public required string Password { get; set; }
    public required string Name { get; set; }
    public required string Surname { get; set; }
}