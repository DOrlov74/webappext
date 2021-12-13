using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class AddTestData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "userRequests",
                columns: new[] { "Id", "Date", "Email", "Name", "Organization", "Role" },
                values: new object[] { 1, new DateTime(2021, 11, 30, 22, 11, 11, 125, DateTimeKind.Utc).AddTicks(7035), "admin@test.com", "Admin", "Test", "Admin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "userRequests",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
