namespace CashCat.Domain.Entities;

public class GoalTransaction
{
    public Guid Id { get; set; }
    public double Amount { get; set; }  
    public DateTimeOffset Date { get; set; }=DateTimeOffset.UtcNow;
    public Guid GoaldId { get; set; }
    public Guid TransactionTypeId { get; set; }
    
    public TransactionType? TransactionType { get; set; }
    public Goal? Goald { get; set; }
    
}