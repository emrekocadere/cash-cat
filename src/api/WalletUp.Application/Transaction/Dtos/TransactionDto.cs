using System;

namespace WalletUp.Application.Transaction.Dtos;

public class TransactionDto
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; } 
    public double Amount { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public required TransactionTypeDto TransactionType { get; set; }
    public required CategoryDto Category { get; set; }
}
