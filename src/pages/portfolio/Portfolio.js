import React from 'react';
import { ContentPortfolio, MediaPortfolio, PortfolioS } from './style';

import Explore from './images/explorer.png';
import ReactImg from '../habilidades/imagens/icon-reactjs.png';
import JSImg from '../habilidades/imagens/icon-js.png';
import { TitleGlobal } from '../sobre/style';
export const Portfolio = () => {
	return (
		<>
			<PortfolioS>
				<div className='container-portfolio'>
					<TitleGlobal>
						<h3 className='detalhe-sobre'>&lt;</h3>
						<h3 className='title-sobre'>Portfólio</h3>
						<h3 className='detalhe-sobre'>/&gt;</h3>
					</TitleGlobal>
					<ContentPortfolio>
						<MediaPortfolio>
							<img src={Explore} alt='explore' className='img-portfolio' />
							<h3 className='title-portfolio'>Explorer</h3>
                            <span className='paragrafo-portfolio'>O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.</span>
							<div className='detalhe-tecnologia'>
								<img
									src={ReactImg}
									alt='tecnologia'
									className='img-tecnologia'
								/>
								<img src={JSImg} alt='tecnologia' className='img-tecnologia' />
							</div>
						</MediaPortfolio>
						<MediaPortfolio>
							<img src={Explore} alt='explore' className='img-portfolio' />
							<h3 className='title-portfolio'>Explorer</h3>
                            <span className='paragrafo-portfolio'>O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.</span>
							<div className='detalhe-tecnologia'>
								<img
									src={ReactImg}
									alt='tecnologia'
									className='img-tecnologia'
								/>
								<img src={JSImg} alt='tecnologia' className='img-tecnologia' />
							</div>
						</MediaPortfolio>
					</ContentPortfolio>
				</div>
			</PortfolioS>
		</>
	);
};
