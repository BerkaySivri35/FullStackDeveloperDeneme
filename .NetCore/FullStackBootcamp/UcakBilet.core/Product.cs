using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcakBilet.Core
{
    public class Product : BaseEntity
    {
        /* ublic string? Name { get; set; } = Propert null olabilir demek ? ile
         */
        public string Name { get; set; }
        public int Stock { get; set; }
        public decimal Price { get; set; }

        /*
         * 1-n ilişkisi
         */
        /*
         * Özel isimlendirme yaparsak eğer:
         * [ForeignKey("Category_Id")]
            public int Category_Id { get; set; }
         * 
         */

        /*
         * Foreing Key
         */
        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public ProductFeature ProductFeature { get; set; }
    }
}
