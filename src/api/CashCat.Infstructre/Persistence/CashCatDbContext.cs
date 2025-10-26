using CashCat.Domain.Entities;
using CashCat.Infstructre.Identity.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CashCat.Infstructre.Persistence;

public class CashCatDbContext:IdentityDbContext<ApplicationUser,ApplicationRole,Guid>
{
    public CashCatDbContext(DbContextOptions<CashCatDbContext> options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Account> Accounts { get; set; }
    public DbSet<AccountType> AccountTypes { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<TransactionType> TransactionTypes { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Apply IEntityTypeConfiguration implementations in this assembly
        builder.ApplyConfigurationsFromAssembly(typeof(CashCatDbContext).Assembly);

        // Additional explicit mapping (if needed) can go here
        // e.g. configure Identity table names or keys if you want to customize
    }
}