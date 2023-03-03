import {model} from "./model";
import {templates} from "./templates";
import './styles/main.css';

const $site = document.querySelector('#site')

model.map(block => {
    let html = ''
    if (block.type === 'title') {
        html = templates.title(block)
    } else if (block.type === 'text') {
        html = templates.text(block)
    } else if (block.type === 'columns') {
        html = templates.columns(block)
    } else if (block.type === 'image') {
        html = templates.image(block)
    }
    $site.insertAdjacentHTML('beforeend', html)
})

