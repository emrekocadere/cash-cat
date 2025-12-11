using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Commands.CreateAccount;

public class CreateAccountCommand:IRequest<Result>
{
    public required string Name { get; set; }
    public Guid AccountTypeId { get; set; }
    public double Balance { get; set; }
    public Guid  CurrencyId { get; set; }
}
