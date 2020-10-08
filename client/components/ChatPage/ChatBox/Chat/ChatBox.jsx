import React, { useEffect } from 'react';
import styled from 'styled-components';
import styledItems from '../../../../styled-items';

export const ChatBoxStyle = styled.div`
<<<<<<< HEAD
	border: 1px solid #5AC4FF;
	background-color: ${styledItems.secondaryBlue};
=======
	border: 1px solid #5ac4ff;
	background-color: #fff;
>>>>>>> 1256a44f28bb406e653d7a9ba1f9b9da2aefbeb0
	min-height: 60%;
	max-height: 60%;
	overflow: auto;
	margin: 1rem;
	border-radius: 5px;
`;

export function ChatBox({ chat }) {
  console.log({chat});
	return (
		<ChatBoxStyle>
			<div className='chat-box'>{chat}</div>
		</ChatBoxStyle>
	);
}
