using WalletUp.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletUp.Infstructre.Identity.Models;

namespace WalletUp.Infstructre.Persistence.Configurations;

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
