using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetCurrencies;

public record GetCurrenciesQuery():IRequest<ResultT<ICollection<CurrencyDto>>>;