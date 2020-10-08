import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ChatBoxStyle = styled.div`
	border: 1px solid purple;
	background-color: #fff;
	min-height: 60%;
	max-height: 60%;
	overflow: auto;
	margin: 1rem;
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

