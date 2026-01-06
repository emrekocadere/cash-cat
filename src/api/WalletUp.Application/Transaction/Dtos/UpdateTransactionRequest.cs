namespace WalletUp.Application.Transaction.Dtos;

public class UpdateTransactionRequest
{
    public Guid Id { get; set; }
    public Guid? TransactionTypeId { get; set; }
    public Guid? CategoryId { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public double Amount { get; set; }
    public DateTime? Date { get; set; }
}