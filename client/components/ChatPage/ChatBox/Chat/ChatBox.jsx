import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ChatBoxStyle = styled.div`
	border: 1px solid #5AC4FF;
	background-color: #fff;
	min-height: 60%;
	max-height: 60%;
	overflow: auto;
	margin: 1rem;
	border-radius: 5px;
`;

export function ChatBox({ chat }) {
	return (
		<ChatBoxStyle>
			<div className='chat-box'>
					{chat}
			</div>
		</ChatBoxStyle>
	);
}

