using Microsoft.AspNetCore.Identity;

namespace WalletUp.Infstructre.Identity.Models;

public class ApplicationUserToken : IdentityUserToken<Guid>
{
    public DateTime ExpiresAt { get; set; }
}