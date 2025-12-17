using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactionsByUser;

public record GetTransactionsByUserQuery():IRequest<ResultT<ICollection<TransactionDto>>>;