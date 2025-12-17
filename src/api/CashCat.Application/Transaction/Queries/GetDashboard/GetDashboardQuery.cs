using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetDashboard;

public record GetDashboardQuery(int Month):IRequest<ResultT<TransactionDashboardDto>>;