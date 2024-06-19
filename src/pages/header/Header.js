import React from 'react';
import { BtnContato, ContainerNav, HeaderS, Logo, RouterHeader } from './style';

export const Header = () => {
	return (
		<HeaderS>
			<div className='container-header'>
				<Logo>
					<h3 className='logo-txt' style={{ color: '#ffc300' }}>
						&lt;K
					</h3>
					<h3 className='logo-txt'>F/&gt;</h3>
				</Logo>
				<ContainerNav>
					<RouterHeader>Home</RouterHeader>
					<RouterHeader>Sobre</RouterHeader>
					<RouterHeader>Habilidades</RouterHeader>
					<RouterHeader>Portfólio</RouterHeader>
				</ContainerNav>
				<BtnContato>Contatos</BtnContato>
			</div>
		</HeaderS>
	);
};
