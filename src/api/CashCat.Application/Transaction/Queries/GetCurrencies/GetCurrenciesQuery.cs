using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetCurrencies;

public record GetCurrenciesQuery():IRequest<ResultT<ICollection<CurrencyDto>>>;