import '../scss/style.scss';

let summingFunc = (x: number, y: number) => { return x + y; };

export const summingNumbers = () => {
const el: HTMLElement = document.getElementById('number-one');
    el.innerHTML = summingFunc(2, 3).toString();
}

summingNumbers();

let divisionFunc = (x: number, y: number) => { return x / y; };

export const divisionNumbers = () => {
    const el: HTMLElement = document.getElementById('number-two');
        el.innerHTML = divisionFunc(6, 2).toString();
    }

    divisionNumbers();

export const greeting = (appeal: any) => {
    const el: HTMLElement = document.getElementById('greeting');
    el.innerHTML = appeal;
};

greeting('Visitor!');