const f = (x) => x * x - x + 1;

const trapezoid = (fn, left, right, steps) => {
    const step = (right - left) / steps;
    let acc = (fn(left) + fn(right)) / 2;

    for (let k = 1; k < steps; k++) {
        acc += fn(left + k * step);
    }

    return acc * step;
};

const rawLeft = prompt("Введите нижний предел интегрирования (a):", "0");
const rawRight = prompt("Введите верхний предел интегрирования (b):", "3");

const leftLimit = parseFloat(rawLeft);
const rightLimit = parseFloat(rawRight);
const partitions = 1000;

if (Number.isNaN(leftLimit) || Number.isNaN(rightLimit)) {
    alert("Ошибка: введите корректные числовые значения.");
} else {
    const area = trapezoid(f, leftLimit, rightLimit, partitions);

    alert(
        `Численное интегрирование функции f(x) = x^2 - x + 1
Пределы: от ${leftLimit} до ${rightLimit}
Метод: трапеций
Число разбиений: ${partitions}
Значение интеграла: ${area.toFixed(6)}`
    );
}
