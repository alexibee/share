import { useState } from 'react';
import './landing.styles.scss';

const Landing = () => {
	const [text, setText] = useState('breathe');
	const [glow, setGlow] = useState('glow-blue');
	const [enter, setEnter] = useState(false);

	const onHoverHandler = () => {
		setGlow((prev) => {
			return prev === 'glow-blue' ? 'glow-pink' : 'glow-blue';
		});
		setText((prev) => {
			return prev === 'breathe' ? 'share' : 'breathe';
		});
	};

	return (
		<>
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
						onClick={() => setEnter(true)}
					>
						{text}
					</div>
				</div>
			</div>
		</>
	);
};
export default Landing;
