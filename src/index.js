import Base from './base/base';
import './style.scss';

if (module.hot) {
  module.hot.accept();
}

const base = new Base();

base.init();
