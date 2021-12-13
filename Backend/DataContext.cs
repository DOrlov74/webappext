using Backend.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<UserRequest> userRequests { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserRequest>().HasData(
                new UserRequest[]
                {
                new UserRequest { Id=1, Name="Admin", Organization="Test", Role="Admin", Email="admin@test.com"},
                });
        }
    }
}
