import React from 'react';

export default (props) => (
    <button style = {{ 
        fontWeight: props.fontWeight, 
        fontFamily: props.fontFamily,
        fontStyle: props.fontStyle,
        paddingRight: props.paddingRight, 
        width: props.width,
        borderRadius: props.borderRadius ? props.borderRadius : '5px', 
        fontSize: props.fontSize, 
        backgroundColor: props.color ? props.color : 'white', 
        color: props.textColor
    }}>{props.children}</button>
)

