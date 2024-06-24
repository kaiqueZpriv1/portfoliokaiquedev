import styled from 'styled-components';

export const HeaderS = styled.header`
	width: 100%;
	height: 75px;
	position: fixed;
	background: #000814;
	z-index: 1;
	.container-header {
		padding: 25px 380px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Logo = styled.h3`
	display: flex;

	.logo-txt {
		display: flex;
		font-size: 1.3em;
		color: #adb5bd;
	}
`;

export const ContainerNav = styled.div`
	display: flex;
	gap: 35px;
`;

export const RouterHeader = styled.h3`
	font-size: 1.3em;
	color: #adb5bd;
	font-weight: 400;
	position: relative;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
		color: #ffc300;
	}
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ffc300;
		visibility: hidden;
		transition: all 0.5s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

export const BtnContato = styled.button`
	border-radius: 20px;
	/* font-family: 'Josefin Sans', sans-serif; */
	font-size: 1em;
	font-weight: 400;
	background: transparent;
	color: #e0e1dd;
	border: 1px solid #e0e1dd;
	padding: 5px 25px;
	&:hover {
		transform: scale(1.1);
		transition: 1s;
		color: #ffc300;
		border: 1px solid #ffc300;
	}
`;
