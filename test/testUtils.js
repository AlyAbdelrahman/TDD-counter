import checkPropTypes from 'check-prop-types';

/**
* Return ShallowWrapper containing node(s) with given date-test value
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attribute for search
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper,val) =>{
    return  wrapper.find(`[data-test='${val}']`)
}
export const checkProps = (component,expectedProps)=>{
    let result = checkPropTypes(component.propTypes,expectedProps, 'prop', component.name);
    expect(result).toBeUndefined();
}