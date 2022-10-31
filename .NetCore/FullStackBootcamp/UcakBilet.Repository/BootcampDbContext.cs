using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using UcakBilet.Core;
using UcakBilet.Repository.Configurations;

namespace UcakBilet.Repository
{
    public class BootcampDbContext : DbContext
    {
        public BootcampDbContext(DbContextOptions options): base(options) { }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        /*var p = new Product() { Name = "", ProductFeature = new ProductFeature() { width = 10 } };*/
        public DbSet<ProductFeature> ProductFeatures { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*
            modelBuilder.Entity<Product>().HasKey(x => x.Id);
            modelBuilder.Entity<Product>().Property(x => x.Id).UseIdentityColumn();
            modelBuilder.Entity<Product>().Property(x => x.Name).IsRequired().HasMaxLength(50);
            
            */

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            /*
             * Sadece CategoryConfiguration()'i uygula
             * modelBuilder.ApplyConfiguration(new CategoryConfiguration());*/
            base.OnModelCreating(modelBuilder);
        }
    }
}
