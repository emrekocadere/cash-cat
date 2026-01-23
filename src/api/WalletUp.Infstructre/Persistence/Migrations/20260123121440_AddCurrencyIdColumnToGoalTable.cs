using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashCat.Infstructre.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddCurrencyIdColumnToGoalTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CurrencyId",
                table: "Goals",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Goals_CurrencyId",
                table: "Goals",
                column: "CurrencyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Goals_Currencies_CurrencyId",
                table: "Goals",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Goals_Currencies_CurrencyId",
                table: "Goals");

            migrationBuilder.DropIndex(
                name: "IX_Goals_CurrencyId",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "CurrencyId",
                table: "Goals");
        }
    }
}
