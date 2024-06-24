import React from 'react';
import {
	ContainerSobre,
	ContentConteudo,
	ImgSobre,
	ParagrafoSobre,
	SobreS,
	TitleGlobal,
	
} from './style';
import SobreImage from './images/Group.png'
import { AiOutlineSend } from 'react-icons/ai';
export const Sobre = () => {
	return (
		<>
			<SobreS>
				<div className='container-sobre'>
					<ContentConteudo>
						<TitleGlobal>
							<h3 className='detalhe-sobre'>&lt;</h3>
							<h3 className='title-sobre'>Sobre</h3>
							<h3 className='detalhe-sobre'>/&gt;</h3>
						</TitleGlobal>
					</ContentConteudo>
					<ContainerSobre>
						<ParagrafoSobre>
							<h3 className='prg-principal'>
								Olá, me chamo Kaique, apaixonado pelo universo de
								desenvolvimento web, dedico-me atualmente ao aprendizado de
								ReactJs e SQL Server.
							</h3>
							<br />
							<h3 className='prg-principal'>
								Busco conhecimento e aperfeiçoamento para explorar novas
								ferramentas e tecnologias!
							</h3>
							<button className='btn-ctt'>Entre em contato comigo
                            <AiOutlineSend size={20} color='#ffc300'/>
                            </button>
						</ParagrafoSobre>
						<ImgSobre>
							<img src={SobreImage} alt='sobre' className='img-sobre' />
						</ImgSobre>
					</ContainerSobre>
				</div>
			</SobreS>
		</>
	);
};
