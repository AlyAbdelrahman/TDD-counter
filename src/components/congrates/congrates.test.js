import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../../../test/testUtils'
import Congrates from './congrates';

const defaultProps ={sucess:false}
const setup = (props={},state=null) =>{
  const setupProps = {...defaultProps,...props}
  const wrapper = shallow(<Congrates {...setupProps}/>);
  if (state) wrapper.setState(state);
  return wrapper;
}
test('render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'congrates-component');
    expect(component.length).toBe(1);
})
test('donot render when the props is false', () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(wrapper,'congrates-component');
    expect(component.text()).toBe(''); 
})
test('render when the props is true', () => {
    const wrapper = setup({sucess:true});
    const component = findByTestAttr(wrapper,'congrates-component');
    expect(component.text().length).not.toBe(''); 
})
test('dosenot throw error when passing the right props', () => {
    const expectedProps = {success:true};
    checkProps(Congrates,expectedProps)
})

