import React from "react";
import PropTypes from 'prop-types';
import './Container.css'

const Container = ({children}) => {
    return (
        <div className="container w-full h-full border-md flex p-5 rounded-md">
            {children} 
        </div>
    )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
