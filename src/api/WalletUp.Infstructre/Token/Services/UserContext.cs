using System.Security.Claims;
using WalletUp.Application.Common.Services;
using Microsoft.AspNetCore.Http;

namespace CashCat.Infstructre.Auth.Services;

public   class UserContext(IHttpContextAccessor httpContextAccessor) : IUserContext
{

    public Guid UserId => Guid.Parse(httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
    

    // public bool IsAuthenticated { get; }
}