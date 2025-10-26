using CashCat.Infstructre.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CashCat.Infstructre.Extensions;

public static class ServiceCollectionsExtensions
{
    public static void AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
         var connectionString = configuration.GetConnectionString("CashCatDbConnection");
         
         services.AddDbContext<CashCatDbContext>(opt=>
         {
             opt.UseNpgsql(connectionString);
         });
    }
}