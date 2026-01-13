using AutoMapper;
using MediatR;
using WalletUp.Application.Transaction.Dtos;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;

namespace WalletUp.Application.Transaction.Queries.GetCountries;

public class GetCountriesQueryHandler(
    IMapper mapper,
    IRepository<Country> countryRepository)
    : IRequestHandler<GetCountriesQuery, ResultT<List<CountryDto>>>
{
    public async Task<ResultT<List<CountryDto>>> Handle(GetCountriesQuery request, CancellationToken cancellationToken)
    {
        var countries = countryRepository.GetAll();
        var countryDtos = mapper.Map<List<CountryDto>>(countries);
        return countryDtos;
    }
}