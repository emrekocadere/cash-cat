using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Account.Commands.UpdateAccount;

public class UpdateAccountCommand:IRequest<Result>
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public Guid? CurrencyId { get; set; }
    public Guid? AccountTypeId { get; set; }
}
