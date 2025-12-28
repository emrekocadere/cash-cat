using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Commands.CreateTransaction;

public class CreateTransactionCommand : IRequest<Result>
{
    public Guid AccountId { get; set; }
    public Guid CategoryId { get; set; }
    public Guid TransactionTypeId { get; set; }
    public double Amount { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
}