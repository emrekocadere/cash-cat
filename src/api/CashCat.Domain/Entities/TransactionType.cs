namespace CashCat.Domain.Entities;

public class TransactionType
{
    public Guid Id { get; set; }
    public required string Name { get; set; }

    public ICollection<Transaction>? Transactions { get; set; }
    public ICollection<GoalTransaction>? GoalTransactions { get; set; }
    
}