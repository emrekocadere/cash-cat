using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetDashboard;

public record GetDashboardQuery(int Month):IRequest<ResultT<TransactionDashboardDto>>;