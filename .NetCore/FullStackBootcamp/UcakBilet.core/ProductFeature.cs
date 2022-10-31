using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UcakBilet.Core.Repositories;

namespace UcakBilet.Core
{   /*
     * Product feature Producttan kalıtım alacağı için Product a kayıt attığımızda
     * product feature da etkilenecek o yüzden baseentityden kalıtım almayacağız
     */
    public class ProductFeature
    {
        /*
        IGenericRepository<Product> genericRepository;
        void metot() 
        {
            var x = genericRepository.GetAll(x=> x.Price >5).OrderBy(x => x.Price).ToList();
        }
        */

        /*
         * [Key]
        public int Product_Feature_Id { get; set; } 
        Açıklama: Id yi özel isimlendirme olarak tanımlamak istersek
        özel ismin Id olduğunu belirtmek için [Key] parametresini kullanmalaıyız
        Normal Id dersek kendi otomatik tanıyor!!!
         */
        
        public int Id { get; set; }
        public string Color { get; set; }
        public int Height { get; set; }
        public int width { get; set; }

        /*
         * ForeignKey
         */
        public int ProductId { get; set; }

        public Product Product { get; set; }

    }
}
