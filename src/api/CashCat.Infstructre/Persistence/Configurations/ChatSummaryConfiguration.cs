using CashCat.Domain.Entities;
using CashCat.Infstructre.Identity.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CashCat.Infstructre.Persistence.Configurations;

public class ChatSummaryConfiguration : IEntityTypeConfiguration<ChatSummary>
{
    public void Configure(EntityTypeBuilder<ChatSummary> builder)
    {

        builder.HasKey(cs => cs.UserId);

        builder.HasOne<ApplicationUser>()
            .WithOne(u => u.ChatSummary)
            .HasForeignKey<ChatSummary>(cs => cs.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
