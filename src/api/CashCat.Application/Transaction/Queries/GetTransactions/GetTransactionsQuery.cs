using System.Formats.Tar;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetTransactions;

public record GetTransactionsQuery(Guid AccountId): IRequest<ResultT<List<TransactionDto>>>;

