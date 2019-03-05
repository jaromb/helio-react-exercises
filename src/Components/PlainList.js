import React from 'react';

export default (props) => (
    <ul style={{
        listStyle: props.listStyle ? props.listStyle : 'none',
        padding: props.padding ? props.padding : '0',
    }}>{props.children}</ul>
)