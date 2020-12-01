import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

/**
* Return ShallowWrapper containing node(s) with given date-test value
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attribute for search
* @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper,val) =>{
  return  wrapper.find(`[data-test='${val}']`)
}
const setup = (props={},state=null) =>{
  const wrapper = shallow(<App {...props}/>);
  if (state) wrapper.setState(state)
  return wrapper;
}

test('render without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
});
test('render increment button',()=>{
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper,'incrment-button');
  expect(buttonComponent.length).toBe(1);

})
test('render counter display',()=>{
  const wrapper = setup();
  const counterDispaly = findByTestAttr(wrapper,'counter-display');
  expect(counterDispaly.length).toBe(1);
})
test('counter start at zero', () => {
  const wrapper = setup();
  expect(wrapper.state('counter')).toBe(0);
})
test('clicking button increase counter display', () => {
  const counter = 7;
  const wrapper = setup(null,{counter});
  const counterIncrease = findByTestAttr(wrapper,'incrment-button');
  counterIncrease.simulate('click');
  wrapper.update();
  const counterDispaly = findByTestAttr(wrapper,'counter-display');
  expect(counterDispaly.text()).toContain(counter+1)
})
test('clicking button decrement decrement', () => {
  const counter = 7;
  const wrapper = setup(null,{counter});
  const decrementButton = findByTestAttr(wrapper,'decrement-button');
  decrementButton.simulate('click');
  wrapper.update();
  const displayCounter = findByTestAttr(wrapper,'counter-display');
  expect(displayCounter.text()).toContain(counter-1);
});


