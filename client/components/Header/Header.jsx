import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue, StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import UserInfo from './UserInfo/UserInfo.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const HeaderBG = styled.div`
	background-color: ${styledItems.primaryBlue};
	height: 130px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: sticky;
	top: 0;
`;

const Logo = styled.div`
	font-size: 2em;
	font-weight: 100;
	margin: 20px 0 0 45px;
`;

const WhiteText = styled.span`
	color: ${styledItems.white};
	font-weight: bold;
	font-family: Arial-Black, Arial, Helvetica;
	letter-spacing: 5px;
	padding-left: 5px;
`;



const Header = () => {
	return (
		<HeaderBG>
			<Logo>
				<Link to="/profilepage">
					<FontAwesomeIcon icon={faPaw} /> <WhiteText>woof</WhiteText>
				</Link>
			</Logo>
			<UserInfo />
		</HeaderBG>
	);
};

export default Header;
