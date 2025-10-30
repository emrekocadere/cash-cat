using Microsoft.AspNetCore.Identity;
using CashCat.Domain.Entities;

namespace CashCat.Infstructre.Identity.Models;

public class ApplicationUser:IdentityUser<Guid>
{
    // Navigation property for user's accounts
    public ICollection<Account>? Accounts { get; set; } = new List<Account>();
    public required string Name { get; set; }
    public required string Surname { get; set; }
}