namespace CashCat.Domain.Entities;

public class Account
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public Guid UserId { get; set; }
    public Guid AccountTypeId { get; set; }
    public double Balance { get; set; }
    public Guid CurrencyId { get; set; }
    public DateTimeOffset CreatedAt { get; set; }= DateTimeOffset.Now;

    public ICollection<Transaction>? Transactions { get; set; }
    public AccountType? AccountType { get; set; }
    public Currency? Currency { get; set; }
    
    public ICollection<Goal>? Goals { get; set; }
}