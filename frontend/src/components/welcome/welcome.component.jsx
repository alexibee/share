import { useEffect, useState } from 'react';
import './welcome.styles.scss';

const Welcome = () => {
	const [text, setText] = useState('breathe');
	const [glow, setGlow] = useState('glow-blue');
	const [display, setDisplay] = useState(
		window.localStorage.getItem('display') || ''
	);

	const onHoverHandler = () => {
		setGlow((prev) => {
			return prev === 'glow-blue' ? 'glow-pink' : 'glow-blue';
		});
		setText((prev) => {
			return prev === 'breathe' ? 'share' : 'breathe';
		});
	};

	useEffect(() => {
		setDisplay(window.localStorage.getItem('display'));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('display', display);
	}, [display]);

	const onClickHandler = () => {
		setDisplay(' display-none');
	};

	return (
		<div className={`welcome${display}`}>
			<video
				className='waveVideo'
				autoPlay
				loop
				muted
			>
				<source
					src='/assets/waves.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='wrap'>
				<div className={`ball ${glow}`}>
					<div
						className='inside-ball'
						onMouseEnter={onHoverHandler}
						onMouseLeave={onHoverHandler}
						onClick={onClickHandler}
					>
						{text}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Welcome;
