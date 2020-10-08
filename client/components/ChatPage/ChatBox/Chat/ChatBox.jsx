import React from 'react';
import styled from 'styled-components';

export const ChatBoxStyle = styled.div`
	border: 1px solid purple;
	min-height: 60%;
`;

export function ChatBox() {
	return (
		<ChatBoxStyle>
			<div className='chat-box'></div>
		</ChatBoxStyle>
	);
}
