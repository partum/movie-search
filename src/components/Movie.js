import React from 'react';

export default function Movie(props) {
	return (
        <div>
            <h2>{props.title}</h2>
            <img href={props.img}></img>
            <p>{props.year}</p>
        </div>
	);
};