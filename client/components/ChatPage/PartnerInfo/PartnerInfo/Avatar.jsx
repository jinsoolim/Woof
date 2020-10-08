import React from 'react';
import styled from 'styled-components';

const AvatarStyles = styled.div`
	min-width: 90%;
	width: 90%:
	min-height: 200px;
	max-height: 200px;
	border: 1px solid red;
`;

export function Avatar({ url }) {
	return (
		<AvatarStyles>
			<img src={url} />
		</AvatarStyles>
	);
}
