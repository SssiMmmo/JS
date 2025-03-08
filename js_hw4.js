'use strict'
/*
Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні
від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення
- чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки
разів буде генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
*/

function checkProbabilityTheory(count) {
    let countNumber = 0;
    let oddCount = 0;
    let evenCount = 0;
    while (count > 0) {
        count--;
        let randNumbers = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        countNumber++
        (randNumbers % 2 === 0) ? evenCount++ : oddCount++;
        //console.log(randNumbers);
    }
    return {
        percentEven: evenCount / countNumber,
        percentOdd: oddCount / countNumber,
        number: countNumber,
        odd: oddCount,
        even: evenCount
    }
}

let result = checkProbabilityTheory(1677);
console.log("Было сгенерировано чисел : " + result.number);
console.log("При генерации случайных чисел вышло: " + result.even + " четных чисел");
console.log("При генерации случайных чисел вышло: " + result.odd + " нечетных чисел");
console.log("Процент четных чисел: " + (result.percentEven * 100).toFixed(3) + "%");
console.log("Процент нечетных чисел: " + (result.percentOdd * 100).toFixed(3) + "%");


