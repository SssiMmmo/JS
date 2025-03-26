//Напишіть регулярний вираз, який знайде послідовність з шести або більше символів,
// які не містять літери «А» (великої або малої)

let str = 'Application, database, analysis, framework, algorithm, automation,' +
                 ' network, cloud, server, backend, frontend, debug, execute, testing, logic, ' +
                 'software, keyboard, command, hardware, process';
let reg = /\b[^aA\s]{6,}\b/gi;

console.log(str.match(reg));