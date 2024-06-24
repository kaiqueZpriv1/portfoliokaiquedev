import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	height: 100%;
	
	.container-home {
		position: relative;
		top: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

export const ContentHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	.txt-principal {
		font-size: 5.5em;
		color: #e0e1dd;
		font-weight: 700;
		font-family: 'Josefin Sans', sans-serif;
		text-shadow: 10px -30px 3px #2b2b30;
	}
	.txt-secund {
		font-size: 2em;
		color: #ffc300;
		font-weight: 400;
	}
	.btn-contact {
		display: flex;
		align-items: center;
		gap: 15px;
		border-radius: 5px;
		border: 1px solid #fafafa;
		font-size: 1em;
		font-weight: 300;
		padding: 15px 30px;
		background: none;
		color: #fafafa;
	}
`;

export const SocialRouter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	position: fixed;
	bottom: 0px;
	left: 10px;
	.lineborder {
		border-right: 2px solid #ffc300;
		height: 80px;
	}
`;