using CashCat.Application.Transaction.Dtos;

namespace CashCat.Application.Account.Dtos;

public class AccountDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public Guid AccountTypeId { get; set; }
    public double Balance { get; set; }
}
