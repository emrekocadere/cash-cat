namespace CashCat.Domain.Entities;

public class Currency
{
    public Guid Id { get; set; }
    public required string ISO4217Code { get; set; } 
    
    public ICollection<Account>? Account { get; set; } 
}