using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactionsByUser;

public record GetTransactionsByUserQuery(
    Guid? CategoryId = null,
    Guid? TransactionTypeId = null,
    Guid? AccountId = null,
    DateTime? StartDate = null,
    DateTime? EndDate = null
):IRequest<ResultT<ICollection<TransactionDto>>>;