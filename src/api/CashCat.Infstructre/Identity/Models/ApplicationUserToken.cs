using Microsoft.AspNetCore.Identity;

namespace CashCat.Infstructre.Identity.Models;

public class ApplicationUserToken : IdentityUserToken<Guid>
{
    public DateTime ExpiresAt { get; set; }
}