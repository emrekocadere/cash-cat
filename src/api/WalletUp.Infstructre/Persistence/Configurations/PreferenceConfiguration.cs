using WalletUp.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WalletUp.Infstructre.Identity.Models;

namespace WalletUp.Infstructre.Persistence.Configurations;

public class PreferenceConfiguration : IEntityTypeConfiguration<Preference>
{
    public void Configure(EntityTypeBuilder<Preference> builder)
    {

        builder.HasOne<ApplicationUser>()
            .WithOne(u => u.Preference)
            .HasForeignKey<Preference>(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
