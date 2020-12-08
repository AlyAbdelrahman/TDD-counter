import React from 'react'
import PropTypes from 'prop-types';
/**
 * Function react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Render component ( or null if `sucess` prop is false)
 */
const Congrates = (props)=> {
    return (
        <div>
            {props.success ?
            <div data-test="congrates-component">
                <span data-test="congrates-msg"> congratessss !!</span>
            </div>:
            <div data-test="congrates-component"/>
            
        }
        </div>
    )
}

Congrates.propTypes = {
    success: PropTypes.bool
}
export default Congrates; 