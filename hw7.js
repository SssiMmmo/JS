//Напишіть регулярний вираз, який знайде послідовність з шести або більше символів,
// які не містять літери «А» (великої або малої)

let str = 'Application, database, analysis, framework, algorithm, automation,' +
                 ' network, cloud, server, backend, frontend, debug, execute, testing, logic, ' +
                 'software, keyboard, command, hardware, process';
let reg = /\b[^aA\s]{6,}\b/gi;

console.log(str.match(reg));


//Paranoya

let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(?:gmail|yahoo)\.com/;
let newArr = [];

for (let i = 0; i < arr.length; i++){    //(let i in arr)
    //console.log(regex.test(arr[i].email));
    //console.log(arr[i].email.match(regex))
    if (regex.test(arr[i].email)){
            newArr.push(arr[i]);
    }
}
console.log(newArr);

