import React from 'react';
import styled from 'styled-components';

export const InputStyle = styled.div`
	text-align: center;
	margin: .7em;
`;

export function InputContainer() {
	return (
		<InputStyle >
			<div className='input-container'>
				<form id="chat-form">
					<input id="msg" type="text" autoComplete="off" required/>
					<button className="btn">Woof!</button>
				</form>
			</div>
		</InputStyle >
	);
}
