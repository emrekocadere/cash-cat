using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CashCat.Infstructre.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class DeleteReletionBetweenAccountAndGoal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountGoal");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "Goals",
                newName: "TargetPercent");

            migrationBuilder.AddColumn<Guid>(
                name: "AccountId",
                table: "Goals",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "CurrentAmount",
                table: "Goals",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Target",
                table: "Goals",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateIndex(
                name: "IX_Goals_AccountId",
                table: "Goals",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Goals_Accounts_AccountId",
                table: "Goals",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Goals_Accounts_AccountId",
                table: "Goals");

            migrationBuilder.DropIndex(
                name: "IX_Goals_AccountId",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "CurrentAmount",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "Target",
                table: "Goals");

            migrationBuilder.RenameColumn(
                name: "TargetPercent",
                table: "Goals",
                newName: "Amount");

            migrationBuilder.CreateTable(
                name: "AccountGoal",
                columns: table => new
                {
                    AccountsId = table.Column<Guid>(type: "uuid", nullable: false),
                    GoalsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountGoal", x => new { x.AccountsId, x.GoalsId });
                    table.ForeignKey(
                        name: "FK_AccountGoal_Accounts_AccountsId",
                        column: x => x.AccountsId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountGoal_Goals_GoalsId",
                        column: x => x.GoalsId,
                        principalTable: "Goals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountGoal_GoalsId",
                table: "AccountGoal",
                column: "GoalsId");
        }
    }
}
