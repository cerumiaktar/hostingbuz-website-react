import React from 'react';

const Choose = ({choose}) => {
    const {title,short_description} = choose;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Choose;