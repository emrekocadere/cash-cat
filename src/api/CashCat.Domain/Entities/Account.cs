namespace CashCat.Domain.Entities;

public class Account
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public Guid UserId { get; set; }
    public Guid AccountTypeId { get; set; }
    public double Balance { get; set; }
    
    public ICollection<Transaction>? Transactions { get; set; } 
    public AccountType? AccountType { get; set; }
    
    
}