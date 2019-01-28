import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, fallbackSrc, ...other}) => {
    let element;
    const changeSrc = newSrc => {
        element.src = newSrc;
    };
    return (
        <img src={src} 
             onError={() => changeSrc(fallbackSrc)} 
             ref={el => element=el} 
             alt=''
             {...other} />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    fallbackSrc: PropTypes.string
};
export default Image;