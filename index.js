function calculateSum() {
    let sum = 0;
    let input;

    do {
        input = prompt("Введите число:");

        if (input !== null) {
            const number = Number(input);

            if (!isNaN(number)) {
                sum += number;
            } else {
                alert("Вы ввели не число. Попробуйте еще раз.");
            }
        }
    } while (input !== null);

    alert(`Сумма всех введенных чисел равна ${sum}.`);
}

calculateSum();