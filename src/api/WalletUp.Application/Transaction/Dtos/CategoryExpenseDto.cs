namespace WalletUp.Application.Transaction.Dtos;

public class CategoryExpenseDto
{
    public Guid CategoryId { get; set; }
    public string CategoryName { get; set; } = string.Empty;
    public double Amount { get; set; }
    public double Percentage { get; set; }
}

