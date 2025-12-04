import React from 'react';
import './Title.css'; 

const Title = (props) => {
    return ( <>
        <h1 className='loginTitle'>{props.pageTitle}</h1>
    
    </> );
}
 
export default Title;