using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Auth.Commands.Register;

public class RegisterCommand:IRequest<ResultT<TokenDto>>
{
    public required string
        Email { get; set; } // benim buraya required yazmam ile [required] yazmama arasıda ne farkj var

    public required string Password { get; set; }
    public required string Name { get; set; }
    public required string Surname { get; set; }
}