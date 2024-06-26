import styled from 'styled-components';

export const PortfolioS = styled.section`
	width: 100%;
	margin-top: 300px;
	.container-portfolio {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const ContentPortfolio = styled.div`
	display: grid;
	grid-template-columns: 400px 400px;
	gap: 100px;
`;

export const MediaPortfolio = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.img-portfolio {
		width: 400px;
	}
	.title-portfolio {
		font-size: 1.5em;
		color: #fafafa;
		font-weight: 500;
	}
	.paragrafo-portfolio {
		font-size: 1em;
		font-weight: 400;
	}
	.detalhe-tecnologia {
		display: flex;
		gap: 10px;
	}
	.img-tecnologia {
		width: 30px;
	}
`;
