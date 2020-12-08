import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr} from '../test/testUtils'
import App from './App';

const setup = (props={},state=null) =>{
  const wrapper = shallow(<App {...props}/>);
  if (state) wrapper.setState(state);
  return wrapper;
}
test('App component should render without errors', () => {
  const wrapper = setup();
  const appCompmonent = findByTestAttr(wrapper,'app-component');
  expect(appCompmonent.length).toBe(1)
})

