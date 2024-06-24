import styled from 'styled-components';

export const HabilidadesS = styled.section`
	padding: 0 400px;
	width: 100%;
	margin-top: 300px;
	.container-habilidades {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const ContentHabilidades = styled.div`
	display: grid;
	grid-template-columns: 200px 200px 200px;
	gap: 60px;
`;

export const BoxHabilidade = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	box-shadow: 0 0 5px #000;
	background: #001219;
	border-radius: 10px;
	padding: 15px 20px;
	.image-hab {
		width: 40px;
	}
	.text-hab {
		font-size: 1em;
		color: #fafafa;
		font-weight: 500;
	}
`;
