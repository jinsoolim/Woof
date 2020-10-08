import React from 'react';
import styled from 'styled-components';
import { PartnerInfo } from '../PartnerInfo/PartnerInfo.jsx';
import { InputContainer } from './Chat/InputContainer.jsx';
import { ChatBoxHeader } from './Chat/ChatBoxHeader.jsx';
import { ChatBox } from './Chat/ChatBox.jsx';

const ChatContainerStyle = styled.div`
	display: flex;
	border: 1px solid purple;
	min-height: 100%;
	min-width: 70%;
`;
const ChatContainerLeftStyle = styled.div`
	max-width: 60%;
	min-width: 60%;
	border: 1px solid blue;
`;
const ChatContainerRightStyle = styled.div`
	min-width: 40%;
	border: 1px solid blue;
`;

export function ChatContainer({ selectedPartner }) {
	return (
		<ChatContainerStyle>
			<ChatContainerLeftStyle>
				<ChatBoxHeader />
				<ChatBox />
				<InputContainer />
			</ChatContainerLeftStyle>
			<ChatContainerRightStyle>
				<PartnerInfo selectedPartner={selectedPartner} />
			</ChatContainerRightStyle>
		</ChatContainerStyle>
	);
}
