const person ={
    name : "Shaikat",
    age : 22
}

const address = {
    city : "Cumilla",
    country : "Bangladesh"
}

const student = {
    ...person,
    ...address,
    department : "CSE",
    year : "4th"
}
console.log(student);