import React from "react";

import Html from './imagens/icon-html.png';
import Css from './imagens/icon-css.png';
import Js from './imagens/icon-js.png';
import ReactJS from './imagens/icon-reactjs.png';
import Git from './imagens/icon-git.png';
import Github from './imagens/icon-github.png';
import { BoxHabilidade, ContentHabilidades, HabilidadesS } from "./style";
import { TitleGlobal } from "../sobre/style";

export const Habilidades = () => {
    return (
			<>
				<HabilidadesS>
					<div className='container-habilidades'>
						<TitleGlobal>
							<h3 className='detalhe-sobre'>&lt;</h3>
							<h3 className='title-sobre'>Habilidades</h3>
							<h3 className='detalhe-sobre'>/&gt;</h3>
						</TitleGlobal>
						<ContentHabilidades>
							<BoxHabilidade>
								<img src={Html} alt='Html' className='image-hab' />
								<h3 className='text-hab'>HTML</h3>
							</BoxHabilidade>
							<BoxHabilidade>
								<img src={Css} alt='Css' className='image-hab' />
								<h3 className='text-hab'>CSS</h3>
							</BoxHabilidade>
							<BoxHabilidade>
								<img src={Js} alt='Js' className='image-hab' />
								<h3 className='text-hab'>JavaScript</h3>
							</BoxHabilidade>
							<BoxHabilidade>
								<img src={Git} alt='Git' className='image-hab' />
								<h3 className='text-hab'>GIT</h3>
							</BoxHabilidade>
							<BoxHabilidade>
								<img src={Github} alt='Github' className='image-hab' />
								<h3 className='text-hab'>GitHub</h3>
							</BoxHabilidade>
							<BoxHabilidade>
								<img src={ReactJS} alt='React' className='image-hab' />
								<h3 className='text-hab'>ReactJS</h3>
							</BoxHabilidade>
						</ContentHabilidades>
					</div>
				</HabilidadesS>
			</>
		);
}