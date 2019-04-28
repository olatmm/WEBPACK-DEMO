import _ from 'lodash';
import './style.css';
import Icon from './webpack.png';
import Data from './data.xml';
import Report from  './report.json';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '']);
    

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    console.log(Report);
    return element;
}

document.body.appendChild(component());

