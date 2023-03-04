import {model} from "./model";
import './styles/main.css';

const $site = document.querySelector('#site')

model.map(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML())
})

