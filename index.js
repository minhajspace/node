// const squre =require('./math')

// const calsqure =(a)=>{
//     console.log(`the value of a is ${a} and the area is ${squre.area(a)} and the parameter is ${squre.parameters(a)}` )
// }

// calsqure(5)


const arrayOne= [1,2,34,56,7,8,9];
const arrayTow =[2,4,35,6,7]

function findCommonArray (){
    arrayOne.map((value)=>{
    arrayTow.map((element)=>{
        console.log(value === element)
    })
    })
}

findCommonArray()