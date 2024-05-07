document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('.display');
    const keys = document.querySelector('.keys');

    keys.addEventListener('click', function (event) {
        const { target } = event;
        if (!target.matches('button')) return;

        const keyValue = target.value;
        if (keyValue === 'all-clear') {
            display.value = '';
        } else if (keyValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (keyValue === 'sqrt') {
            display.value = Math.sqrt(parseFloat(display.value));
        } else if (keyValue === 'sin') {
            display.value = Math.sin(parseFloat(display.value));
        } else if (keyValue === 'cos') {
            display.value = Math.cos(parseFloat(display.value));
        } else if (keyValue === 'tan') {
            display.value = Math.tan(parseFloat(display.value));
        } else {
            display.value += keyValue;
        }
    });
});
