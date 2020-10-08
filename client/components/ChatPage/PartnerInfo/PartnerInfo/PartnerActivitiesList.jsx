import React from 'react';
import styled from 'styled-components';

const PartnerActivitiesListStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 200px;
	border: 1px solid red;
	overflow: scroll;
`;

export function PartnerActivitiesList({ activities }) {
	return (
		<PartnerActivitiesListStyles>
			<h4>Activities</h4>
		</PartnerActivitiesListStyles>
	);
}
