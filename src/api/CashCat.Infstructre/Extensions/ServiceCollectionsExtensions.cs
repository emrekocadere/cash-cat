using System.Text;
using CashCat.Application.Common.Services;
using CashCat.Application.Identity;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using CashCat.Domain.Services;
using CashCat.Infstructre.Auth.Services;
using CashCat.Infstructre.Identity;
using CashCat.Infstructre.Identity.Models;
using CashCat.Infstructre.Persistence;
using CashCat.Infstructre.Persistence.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace CashCat.Infstructre.Extensions;

public static class ServiceCollectionsExtensions
{
    public static void AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");

        services.AddDbContext<CashCatDbContext>(opt => { opt.UseNpgsql(connectionString); });

        services.AddIdentity<ApplicationUser, ApplicationRole>()
            .AddEntityFrameworkStores<CashCatDbContext>();


        services.AddHttpContextAccessor();

        services.AddScoped<IUserContext, UserContext>();
        services.AddScoped<IIdentityService, IdentityService>();
        services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<IRepository<Transaction>, Repository<Transaction>>();
        services.AddScoped<IUserTokenRepository, UserTokenRepository>();
        services.AddScoped<IAccountRepository, AccountRepository>();
        services.AddScoped<ITransactionRepository, TransactionRepository>();
        services.AddScoped<IRepository<Account>, Repository<Account>>();

        services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => // Uygulamaya diyor ki: "Ben gelen isteklerde Authorization: Bearer {token} başlığına bakacağım."
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
    
                options.TokenValidationParameters = new TokenValidationParameters //Gelen token’ı TokenValidationParameters kurallarına göre kontrol edecek:
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = configuration["JWT:ValidAudience"],
                    ValidIssuer = configuration["JWT:ValidIssuer"],
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
                };
            });

        var applicationAssembly = typeof(ServiceCollectionsExtensions).Assembly;
        services.AddAutoMapper(cfg => { }, applicationAssembly);



    }
    
        public static void UseInfrastructure(this IApplicationBuilder app)
    {
        app.UseAuthentication();
        app.UseAuthorization();
    }
}