using CashCat.Application.Extensions;
using CashCat.Infstructre.Extensions;

namespace CashCat.API;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddInfrastructureServices(builder
            .Configuration); // bunu eklemzsek ne olur baba. ne olduğunu hatırlaıyprum iyi analiz et
        builder.Services.AddApplication();
        // Bu hata, Entity Framework Core (EF Core) kullanırken karşına çıkan çok yaygın bir hatadır.
        //     Kısaca açıklarsak:
        //
        // EF Core, CashCatDbContext sınıfını oluşturmak isterken gerekli olan DbContextOptions<CashCatDbContext> nesnesini bulamıyor.
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}