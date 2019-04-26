import _ from 'lodash';
import './style.css';
import 'bootstrap';
import Icon from './'

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '']);
    element.classList.add(['hello', 'jumbotron']);
  
    return element;
}

document.body.appendChild(component());

