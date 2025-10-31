using CashCat.Domain.Repositories;
using CashCat.Infstructre.Identity.Models;

namespace CashCat.Infstructre.Persistence.Repositories;

public interface IUserTokenRepository:IRepository<ApplicationUserToken>
{
    ApplicationUserToken GetByUserId(Guid userId);
}