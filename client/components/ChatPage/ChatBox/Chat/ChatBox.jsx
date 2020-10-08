import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ChatBoxStyle = styled.div`
	border: 1px solid purple;
	background-color: green;
	min-height: 60%;
	max-height: 60%;
	overflow: auto;
`;

export function ChatBox({ chat }) {
	return (
		<ChatBoxStyle>
			<div className='chat-box'>{chat}</div>
		</ChatBoxStyle>
	);
}
