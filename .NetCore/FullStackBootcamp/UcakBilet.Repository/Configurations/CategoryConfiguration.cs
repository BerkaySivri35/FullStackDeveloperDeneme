using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UcakBilet.Core;

namespace UcakBilet.Repository.Configurations
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            /*
             * .net fluent API
             */
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).UseIdentityColumn();/* Birer birer artması için */
            builder.Property(x => x.Name).IsRequired().HasMaxLength(50);

            builder.ToTable("Category");
        }

    }
}
