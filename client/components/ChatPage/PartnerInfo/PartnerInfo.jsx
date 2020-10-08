import React from 'react';
import styled from 'styled-components';
import { Avatar } from './PartnerInfo/Avatar.jsx';
import { PartnerActivitiesList } from './PartnerInfo/PartnerActivitiesList.jsx';
import { PartnerInfoItem } from './PartnerInfo/PartnerInfoItem.jsx';
import { PartnerPetInfoItem } from './PartnerInfo/PartnerPetInfoItem.jsx';

const PartnerInfoStyle = styled.div`
	border: 1px solid purple;
	min-height: 100%;
	min-width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export function PartnerInfo({ selectedPartner }) {
	const {
		firstName,
		location,
		age,
		avatarUrl,
		activities,
		petInfo,
	} = selectedPartner;
	const partnerInfo = { firstName, location, age };

	return (
		<PartnerInfoStyle>
			<Avatar url={avatarUrl} />
			<PartnerInfoItem partnerInfo={partnerInfo} />
			<Avatar url={petInfo.avatarUrl} />
			<PartnerPetInfoItem petInfo={petInfo} />
			<PartnerActivitiesList activities={activities} />
		</PartnerInfoStyle>
	);
}
