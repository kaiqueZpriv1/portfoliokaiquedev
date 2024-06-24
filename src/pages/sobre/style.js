import styled from 'styled-components';

export const SobreS = styled.section`
	width: 100%;
	margin-top: 750px;
	padding: 0 400px;
	.container-sobre {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;

export const ContentConteudo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TitleGlobal = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	padding-bottom: 50px;
	.detalhe-sobre {
		font-size: 3em;
		color: #ffc300;
		font-size: 500;
	}
	.title-sobre {
		font-size: 3em;
		color: #fafafa;
		font-weight: 500;
	}
`;

export const ContainerSobre = styled.div`
	display: flex;
	align-items: center;
`;

export const ParagrafoSobre = styled.div`
	display: flex;
	flex-direction: column;
    align-items: start;
	gap: 10px;
	.prg-principal {
		font-size: 1.5em;
		color: #fafafa;
		font-weight: 300;
	}
	.btn-ctt {
        padding-top: 20px;
		background: transparent;
		border: none;
		font-size: 1.3em;
		color: #ffc300;
		font-weight: 300;
        display: flex;
        align-items: center;
        gap: 20px;
	}
`;

export const ImgSobre = styled.div`
	display: flex;
	align-items: center;
    position: relative;
    bottom: 44px;
	.img-sobre {
		width: 450px;
	}
`;
