import { getRandomColor } from "./utils";

export default function initApp() {
    console.log('Hello world');

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Изменить цвет страницы';

    const body = document.querySelector('body');
    body.append(button);

    button.addEventListener('click', () => {
        const color = getRandomColor();
        body.style.background = color;
    });
}
