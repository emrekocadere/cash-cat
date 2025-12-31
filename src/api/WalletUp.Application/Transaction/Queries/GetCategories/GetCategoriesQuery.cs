using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetCategories;

public record GetCategoriesQuery(): IRequest<ResultT<ICollection<CategoryDto>>>;