namespace CashCat.Application.Goal.Dtos;

public class AddGoalTransactionRequest
{
    public double Amount { get; set; }  
    public Guid TransactionTypeId { get; set; }
}