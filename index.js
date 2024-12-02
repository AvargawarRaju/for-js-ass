var car = {
    brand: 'Toyota',
    model: 'corolla',
    year: '2020'
};
for(i in car){
    y=""+car[i].toUpperCase()
    // console.log(`${i}:${y()}`)
    var up = y
    console.log(`${y}`)

} 


var num = [1,2,3,4,5]
for (var  i=0; i < 5; i++ ){
    console.log(num[i] + '-HI')
}
// for(i in num){
//     console.log(`${num[i]}-HI`)
// }




var frs =['Apple', 'Banana', 'cherry', 'Date'];
for(i in frs){
    // console.log(`${[i]}-${frs[i].toUpperCase()}`)
}
for (var index in frs) {
    if (index < 4 ) {
        console.log(index + '-' + frs[index]);
    }
}






 var obj={
    name:"john",
    age:"30",
    adress :{
        city:`los angela`,
        state:`ca`
    }
 };
 obj.adress.city = "Hydearabad";
 obj.adress.state="Telangana";
 console.log(` name:${obj.name} age is: ${obj.age} and he lives in ${obj.adress.city} state: ${obj.adress.state} `)

 console.log(obj.adress.city);

 console.log(obj)





 var car ={
    brand:'Toyota',
    model:'camry',
    year:2020
 }
car.year="2022"
console.log(`brand ${car.brand} model ${car.model} year:${car.year}`)

console.log(car)




var reciepe={
    name:'pasta',
    servings: 2,
    ingredients:['noodles', 'sauce']
}
reciepe.ingredients=['noodles', 'sauce', 'cheese']
console.log(`food items name: ${reciepe.name} servings:${reciepe.servings} ingredient ${reciepe.ingredients}`)




