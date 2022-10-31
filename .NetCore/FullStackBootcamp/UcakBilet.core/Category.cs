using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcakBilet.Core
{
    public class Category : BaseEntity
    {
        public int Name { get; set; }

        /*
         * Navigation property
         */
        public ICollection<Product> Products { get; set; }

    }
}
