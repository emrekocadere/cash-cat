using CashCat.Application.Transaction.Dtos;

namespace CashCat.Application.Account.Dtos;

public class AccountDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required AccountTypeDto AccountType { get; set; }
    public double Balance { get; set; }
    public CurrencyDto Currency { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    
}