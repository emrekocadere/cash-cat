using System.Formats.Tar;
using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetTransactions;

public record GetTransactionsQuery(
    Guid AccountId,
    Guid? CategoryId = null,
    Guid? TransactionTypeId = null,
    DateTime? StartDate = null,
    DateTime? EndDate = null
): IRequest<ResultT<List<TransactionDto>>>;
