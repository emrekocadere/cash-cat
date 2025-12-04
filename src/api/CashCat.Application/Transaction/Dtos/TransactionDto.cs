using System;

namespace CashCat.Application.Transaction.Dtos;

public class TransactionDto
{

    public DateTime Date { get; set; } = DateTime.UtcNow;
    public double Amount { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? TransactionType { get; set; }
    public string? Category { get; set; }
}
