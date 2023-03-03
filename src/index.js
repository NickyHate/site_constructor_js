import {model} from "./model";
import {templates} from "./templates";
import './styles/main.css';

const $site = document.querySelector('#site')

model.map(block => {
    const toHTML = templates[block.type]
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})

