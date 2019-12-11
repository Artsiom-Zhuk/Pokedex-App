import React from 'react';
import './style.scss';

interface HelloProps {
    name: string
}

const Hello: React.FunctionComponent<HelloProps> = ({ name }) => (
    <div className="example-class">{ `Hello, ${name}` }</div>
);

export default Hello;
