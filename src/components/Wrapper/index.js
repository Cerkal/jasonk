import React from 'react';

export const Wrapper = (props) => {
    // Pass properties when using <Wrapper propexample="text">
    // then use in this component props.propexample
	let classname = !props.className ? '' : props.className; 
	return (
		<>
		<div className={classname} style={{
			margin: '0 auto',
			top: '5em',
            position: 'relative'
		}}
		>
			{props.children}
		</div>
		</>
	)
}
