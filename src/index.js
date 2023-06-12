import model from './model.js';
import { form } from './view.js';

const component = () => {
    const element = document.createElement('div')


    element.appendChild(form())
    return element
}

document.body.appendChild(component())