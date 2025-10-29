using System.Text;
using CashCat.Infstructre.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

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

        

        services.AddAuthentication(options => // nden kütüphaneyi indridikten sonra çalıştı. sonuçta services başka yerde. program.cs te kabul ediyor
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
    }
}