import React from 'react';
import styled from 'styled-components';

const UserItemStyle = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid purple;
	min-height: 60px;
	max-height: 60px;
`;

const AvatarStyle = styled.div`
	max-height: 50px;
	max-width: 50px;
	border-radius: 50%;
`;

const PartnersNameStyle = styled.h4`
	font-size: 1.3rem;
`;

export function UserItem({ user, setSelectedPartner }) {
	const { firstName, petInfo, partnerAvatarUrl, petAvatarUrl } = user;

	return (
		<UserItemStyle>
			<PartnersNameStyle onClick={() => setSelectedPartner(user)}>
				{firstName} & {petInfo.name}
			</PartnersNameStyle>
		</UserItemStyle>
	);
}
