namespace CashCat.Domain.Entities;

public class AccountType
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public Guid AccountId { get; set; }
    
    public Account? Account { get; set; }
    
}