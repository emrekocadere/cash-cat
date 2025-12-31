using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CashCat.Infstructre.Persistence;

public class CashCatDbContextFactory : IDesignTimeDbContextFactory<CashCatDbContext>
{
    public CashCatDbContext CreateDbContext(string[] args)
    {
        var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";
        var basePath = Directory.GetCurrentDirectory();

        var config = new ConfigurationBuilder()
            .SetBasePath(basePath)
            .AddJsonFile("appsettings.json", true)
            .AddJsonFile($"appsettings.{environment}.json", true)
            .AddEnvironmentVariables()
            .Build();

        var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING")
                               ?? config.GetConnectionString("DefaultConnection")
                               ?? throw new InvalidOperationException(
                                   "Connection string not found. Set CONNECTION_STRING env var or DefaultConnection in appsettings.");

        var optionsBuilder = new DbContextOptionsBuilder<CashCatDbContext>();
        optionsBuilder.UseNpgsql(connectionString,
            b => b.MigrationsAssembly(typeof(CashCatDbContext).Assembly.GetName().Name));

        return new CashCatDbContext(optionsBuilder.Options);
    }
}