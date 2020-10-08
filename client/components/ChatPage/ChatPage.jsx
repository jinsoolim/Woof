import React, { useState } from 'react';
import styled from 'styled-components';

import { UserList } from './UserList/UserList.jsx';
import { ChatContainer } from './ChatBox/ChatContainer.jsx';

const ChatPageStyle = styled.div`
	display: flex;
	border: 1px solid red;
	min-height: 80%;
	min-width: 100%;
`;

export function ChatPage() {
	//use context to pull down matchlist
	const matchList = [
		{
			_id: 564345532,
			firstName: 'Gary',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'www.blah.com',
			activities: { coffee: 'i like starbucks' },
			petInfo: {
				name: 'Chico',
				age: '2',
				breed: 'Pitbull Terrier Mix',
				size: 'Medium',
				avatarUrl: 'https://www.facebook.com/p182020903468349322052',
			},
		},
		{
			_id: 1007,
			firstName: 'Kevin',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'www.asdf.com',
			activities: { xcv: 'i like starbucks' },
			petInfo: {
				name: 'Chachi',
				age: '2',
				breed: 'Pitbull Terrier Mix',
				size: 'Medium',
				avatarUrl: 'https://www.test.com',
			},
		},
		{
			_id: 3001,
			firstName: 'John',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'www.asdf.com',
			activities: { asdf: 'i like starbucks' },
			petInfo: {
				name: 'Luna',
				age: '2',
				breed: 'Kitty Kat',
				size: 'Tiny thang',
				avatarUrl: 'https://www.facebook.com/',
			},
		},
	];

	const [selectedPartner, setSelectedPartner] = useState(null);
	if (selectedPartner) {
		return (
			<ChatPageStyle>
				<UserList
					matchList={matchList}
					setSelectedPartner={setSelectedPartner}
				/>
				<ChatContainer selectedPartner={selectedPartner} />
			</ChatPageStyle>
		);
	} else {
		return (
			<ChatPageStyle>
				<UserList
					matchList={matchList}
					setSelectedPartner={setSelectedPartner}
				/>
				{/* empty divs for placeholders for styling */}
				<div></div>
				<div></div>
			</ChatPageStyle>
		);
	}
}
