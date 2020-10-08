import React from 'react';
import styled from 'styled-components';

const PartnerInfoItemStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 200px;
	border: 1px solid red;
	overflow: scroll;
`;

export function PartnerInfoItem({ partnerInfo }) {
	const { firstName, age, location } = partnerInfo;
	return (
		<PartnerInfoItemStyles>
			<h3>{firstName}</h3>
			<p>Location: {location}</p>
			<p>Age: {age} years old</p>
		</PartnerInfoItemStyles>
	);
}
