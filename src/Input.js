import React from 'react';

const Input = ({value, onEnter, onChange}) => {
    
    return(

        <textarea 
        style ={{ padding: 12}}
        value = {value}
        onChange = {(e) => onChange(e.target.value)}
        onKeyUp = {(e) => (e.keyCode === 13 ? onEnter(e.target.value) : null)}        
        />
        
    );
}




export default Input;