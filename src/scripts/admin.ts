
import '../scss/style.scss';

let summingFunc = (x: number, y: number) => { return x + y; };

export const summingNumbers = () => {
const el: HTMLElement = document.getElementById('number-one');
    el.innerHTML = summingFunc(2, 3).toString();
}

summingNumbers();

let multiplicationFunc = (x: number, y: number) => { return x * y; };

export const multiplicationNumbers = () => {
    const el: HTMLElement = document.getElementById('number-two');
        el.innerHTML = multiplicationFunc(2, 4).toString();
    }

multiplicationNumbers();

export const greeting = (appeal: any) => {
    const el: HTMLElement = document.getElementById('greeting');
    el.innerHTML = appeal;
};

greeting('Admin!');