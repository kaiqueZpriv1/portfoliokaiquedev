import React from 'react';
import { ContentHome, HomeS, SocialRouter } from './style';
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';
import TypewriterComponent from 'typewriter-effect';
export const Home = () => {
	return (
		<>
			<HomeS>
				<div className='container-home'>
					<ContentHome>
						<h1 className='txt-principal'>
							<TypewriterComponent
								options={{
									strings: ['Kaique Ferreira'],
									autoStart: true,
									loop: true,
									skipAddStyles: true,
									deleteSpeed: 95,
									// cursor: '',
								}}
							/>
						</h1>
						<p className='txt-secund'>Desenvolvedor Front-End</p>
						<button className='btn-contact'>
							<AiOutlineMail size={20} color='#fafafa' />
							<span>|</span>
							kaiquedev.dev@gmail.com
						</button>
					</ContentHome>
					<SocialRouter>
						<AiOutlineLinkedin size={25} color='#fafafa' />
						<AiOutlineInstagram size={25} color='#fafafa' />
						<AiOutlineGithub size={25} color='#fafafa' />
						<div className='lineborder'></div>
					</SocialRouter>
				</div>
			</HomeS>
		</>
	);
};
