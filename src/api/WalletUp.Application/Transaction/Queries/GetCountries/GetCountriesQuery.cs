using MediatR;
using WalletUp.Application.Transaction.Dtos;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;

namespace WalletUp.Application.Transaction.Queries.GetCountries;

public record GetCountriesQuery():IRequest<ResultT<List<CountryDto>>>;