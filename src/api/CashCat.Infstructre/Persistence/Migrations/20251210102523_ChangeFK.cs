using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashCat.Infstructre.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ChangeFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Currencies_CurrencyId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_CurrencyId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "CurrencyId",
                table: "Transactions");

            migrationBuilder.AddColumn<Guid>(
                name: "CurrencyId",
                table: "Accounts",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_CurrencyId",
                table: "Accounts",
                column: "CurrencyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_Currencies_CurrencyId",
                table: "Accounts",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_Currencies_CurrencyId",
                table: "Accounts");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_CurrencyId",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "CurrencyId",
                table: "Accounts");

            migrationBuilder.AddColumn<Guid>(
                name: "CurrencyId",
                table: "Transactions",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_CurrencyId",
                table: "Transactions",
                column: "CurrencyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Currencies_CurrencyId",
                table: "Transactions",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
