import React from 'react';
import ReactDOM from 'react-dom';
import Aak from './components/one/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Aak />, div);
  ReactDOM.unmountComponentAtNode(div);
});
