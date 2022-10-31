using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcakBilet.Core


{   
    public class BaseEntity 
    {
        /*Abstractlar soyut nesnedir. Ortak property veya ortak metot tanımladığımız yerlerdir*
        * interfacelerde soyut yapılardır. 
        */

        /*
         * properties
         */
        public int Id { get; set; }
        /*
         * Ne zaman eklendi?
         */
        public DateTime CreatedAt{ get; set; }
        /*
         * kim tarafından eklendi?
         */
        public int CreatedBy { get; set; }
        /*
         * Ne zaman  silindi?
         */
        public DateTime DeletedAt { get; set; }
        /*
         * kim tarafından silindi?
         */
        public DateTime DeletedBy { get; set; }
        /*
         * Silindi mi ?
         */
        public bool IsDeleted { get; set; }

    }
}
