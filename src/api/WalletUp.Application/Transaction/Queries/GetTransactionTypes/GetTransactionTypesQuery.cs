using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactionTypes;

public record GetTransactionTypesQuery():IRequest<ResultT<ICollection<TransactionTypeDto>>>;