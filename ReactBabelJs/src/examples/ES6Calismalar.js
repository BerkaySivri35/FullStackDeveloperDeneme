const root = document.getElementById("root");

/*let template = (
    <div>Hello World</div>
);
ReactDOM.render(template,root);
*/

//ES5
function merhabaES5(){
    console.log("merhaba");
}

var helloES5 = function() {
    console.log("helloEs5")
}

var multiES5 = function(x, y){
    return x + y;
}

helloES5();

merhabaES5()

console.log(multiES5(5,7))

/*id, name, surname */

var getUser = function(id, name, surname){
    return{
        id,
        name,
        surname
    }
}

console.log(getUser("1","Berkay","Sivri"));
let userObj = getUser(1, 'Berkay2',"Sivri2");
//console.log(userObj.id, ':', userObj.name, ':', userObj.surname);
console.log(`${userObj.id}, ${userObj.name}  ${userObj.surname}`)

// ES6

let helloES6 = () =>{console.log("helloES6")};

helloES6();

let merhabaES6 =() => console.log("merhabaES6 Tek satırda");
merhabaES6();

let multiES6 = (x,y) => x + y;

console.log("Toplama: ",multiES6(5,5));

let CarpmaES6 = (x,y) => x * y;

console.log("Çarpma: ",CarpmaES6(5,5));

//Getuser ES6 şeklinde tanımı
let getUserES6 = (id, name, surname) => ({
    id:id,
    name:name,
    surname:surname
});

let userObj2 = getUserES6(1,"BerkayES6", "SivriES6");
console.log(userObj2);

//ES6 Arrow Functions

const cars =[
    {brand: 'Bmw',price: 200000},
    {brand: 'Mercedes',price: 300000},
    {brand: 'Opel',price: 250000},
    {brand: 'Ford',price: 100000},
];

let priceES5 = function(){
    cars.map((car) => {
        console.log(car.price);
    })
}

console.log(priceES5())
//Fiyatı 100000' den büyük olanları listele ES5 ile
let filterES5 = cars.filter(function(car){
    return car.price > 200000;
})
console.log("ES5 Filter", filterES5)

//ES6 versiyon
let priceES6 = cars.map(car => car.price)
console.log("ES6",priceES6);
//Fiyatı 100000' den büyük olanları listele
let priceES66 = cars.map(car => car.price > 100000)
console.log("ES6",priceES66);

let filterES6 = cars.filter(car => car.price > 200000);
console.log("ES6Filter", filterES6)
//------------------------------------------------------------

//ES6 this

const users ={
    fullName:"Berkay Sivri",
    email:"berkay@gmail.com",
    city:"İzmir",
    roles:["A","U"],

    getRoles:function(){
        console.log(this.fullName);
        console.log(this.roles);
    //ES6
        //foreach ile
        this.roles.forEach((item) => {
            console.log(item);
            console.log(this.fullName);
        })

        //map ile
        //this.roles.map((role) => console.log(role))
    
    //ES5
    /*this.roles.forEach(function(item){
        console.log("ES5 ile",item)
    }) */   

    }
};

users.getRoles();

let intArr = [1,2,3,4,5];
/*let topla = 0
for(let i = 0; i < intArr.length; i++){
    topla += intArr[i];
    
}
console.log("i toplamı: ",topla)
*/

const addES5 = function(arr){
    //console.log("arguments: ",arguments);
    let total = 0;
    arguments[0].map(function(e){
        total+=e;
    });
    return total;
}
console.log(addES5(intArr));

//-----------------CLASS----------------------
/* ES6 Class */
//-------------------

/* ES5 */

var ES5Person ={
    name: ""
}//obje

var ES5Person2 = function(){} //fonksiyon olarak klaslar oluşur.

// nesne -object
const ES5p = new ES5Person2();
console.log(ES5p)

/* ES6 */

class ES6Person {
    constructor(name = "Berkay", year = new Date().getFullYear()){
        this.name = name;
        this.year = year;
    }

    getAgeOfYear(){
        return  new Date().getFullYear() - this.year;
    }

    greeting(text){
        return `${text}, Benim adım ${this.name}`;
    }
}

// nesne -object

let ES6p = new ES6Person();
console.log(ES6p);
let ES6p2 = new ES6Person("Eren", 2000);
console.log(ES6p2);
console.log(ES6p2.greeting("Maraba"), "Yaşım" , ES6p2.getAgeOfYear());