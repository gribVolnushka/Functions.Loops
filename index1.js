function calculateAverage() {
    let sum = 0;
    let count = 0;
    let input;

    do {
        input = prompt("Введите число:");

        if (input !== null) {
            const number = Number(input);

            if (!isNaN(number)) {
                sum += number;
                count++;
            } else {
                alert("Вы ввели не число. Попробуйте еще раз.");
            }
        }
    } while (input !== null);

    if (count === 0) {
        alert("Вы не ввели ни одного числа.");
    } else {
        const average = sum / count;
        alert(`Среднее арифметическое всех введенных чисел равно ${average}.`);
    }
}

calculateAverage();