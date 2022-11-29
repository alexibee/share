import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'
				>
					LOGO
				</Link>
				<Link to='/'> HOME </Link>
			</div>
			<Outlet />
		</>
	);
};
export default Navigation;
