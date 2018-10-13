import _ from 'lodash';
import './style.scss';
import './style.css';


function component() {
  let element = document.createElement('div');
  const [msg1,,msg2] = ['Hello', 'NOTHING', 'webpack'];

  element.innerHTML = _.join([msg1, msg2], ' ');
  element.classList.add('hello');

  return element;
}



document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}
