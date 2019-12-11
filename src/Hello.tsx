import React from 'react';

interface HelloProps {
    name: string
}

const Hello: React.FunctionComponent<HelloProps> = ({ name }) => (
    <div>{ `Hello, ${name}` }</div>
);

export default Hello;
