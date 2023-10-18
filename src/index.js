import './style.css';
import insert from './insert-content.js';
import { forEach } from 'lodash';

function component() {
    const content = document.querySelector('#content');
    const btns = document.querySelectorAll('li');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            content.innerHTML = insert(btn.innerHTML)
        });
});
}

component();