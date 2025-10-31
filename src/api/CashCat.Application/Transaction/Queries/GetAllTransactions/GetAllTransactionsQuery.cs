using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetAllTransactions;

public class GetAllTransactionsQuery:IRequest<ResultT<List<TransactionDto>>>
{
    public int PageNumber { get; set; }
}