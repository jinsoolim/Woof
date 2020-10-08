import React from 'react';
import styled from 'styled-components';
import { UserItem } from './UserItem/UserItem.jsx';

const UserListStyle = styled.div`
	border: 1px solid purple;
	min-height: 100%;
	min-width: 30%;
	max-width: 30%;
	overflow: scroll;
`;

export function UserList({ matchList, setSelectedPartner }) {
	const displayMatchList = matchList.map((user, idx) => {
		return (
			<UserItem
				user={user}
				key={`${user}-${idx}`}
				setSelectedPartner={setSelectedPartner}
			/>
		);
	});

	return <UserListStyle>{displayMatchList}</UserListStyle>;
}
