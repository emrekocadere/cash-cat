using System.Runtime.InteropServices.JavaScript;

namespace WalletUp.Domain.Entities;

public class GoalTransaction
{
    public Guid Id { get; set; }
    public double Amount { get; set; }  
    public DateTime  Date { get; set; }=DateTime.UtcNow;
    public Guid GoaldId { get; set; }
    public Guid TransactionTypeId { get; set; }
    
    public TransactionType? TransactionType { get; set; }
    public Goal? Goald { get; set; }
    
}