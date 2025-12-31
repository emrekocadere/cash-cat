using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactionsByUser;

public record GetTransactionsByUserQuery():IRequest<ResultT<ICollection<TransactionDto>>>;