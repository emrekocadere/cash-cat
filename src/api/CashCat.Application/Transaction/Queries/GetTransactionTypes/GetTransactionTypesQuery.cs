using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactionTypes;

public record GetTransactionTypesQuery():IRequest<ResultT<ICollection<TransactionTypeDto>>>;