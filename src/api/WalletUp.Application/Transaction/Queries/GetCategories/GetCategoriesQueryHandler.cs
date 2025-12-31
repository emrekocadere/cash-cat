using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetCategories;

public class GetCategoriesQueryHandler(
    IMapper mapper,
    IRepository<Category> categoryRepository)
    :IRequestHandler<GetCategoriesQuery, ResultT<ICollection<CategoryDto>>>
{
    public Task<ResultT<ICollection<CategoryDto>>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories = categoryRepository.GetAll();
        var categoryDtos = mapper.Map<List<CategoryDto>>(categories);
        return Task.FromResult<ResultT<ICollection<CategoryDto>>>(categoryDtos);
    }
}
