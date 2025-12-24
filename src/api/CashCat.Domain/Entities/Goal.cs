namespace CashCat.Domain.Entities;

public class Goal
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public required string Title { get; set; }
    public double Amount { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset CreationTime { get; set; }=DateTimeOffset.UtcNow;
    
    public ICollection<Account>? Accounts { get; set; }

}