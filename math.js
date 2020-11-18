const area =(a)=>(a*a);
const parameters=(a)=>(a*4)
const myDetails = (Name,Age,City,College)=>{
return  `my Name is ${Name}  and I belong to ${City} and I'm ${Age} year old I studied in ${College}`
}

module.exports.area = area;
module.exports.parameters=parameters
module.exports.myDetails=myDetails