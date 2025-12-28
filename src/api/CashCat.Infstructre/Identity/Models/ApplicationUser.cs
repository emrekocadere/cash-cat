using Microsoft.AspNetCore.Identity;
using CashCat.Domain.Entities;

namespace CashCat.Infstructre.Identity.Models;

public class ApplicationUser : IdentityUser<Guid>
{
    // Navigation property for user's accounts
    public ICollection<Account>? Accounts { get; set; } = new List<Account>();

    // Navigation property for user's goals
    public ICollection<Goal>? Goals { get; set; } = new List<Goal>();
    public ICollection<ChatMessage>? ChatMessages { get; set; } = new List<ChatMessage>();
    public ChatSummary? ChatSummary { get; set; }
    public required string Name { get; set; }
    public required string Surname { get; set; }
}