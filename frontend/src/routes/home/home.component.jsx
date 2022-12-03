import PostGrid from '../../components/post-grid/post-grid.component';
import Welcome from '../../components/welcome/welcome.component';

const Home = () => {
	return (
		<div className='container'>
			<Welcome />
			<PostGrid />
		</div>
	);
};

export default Home;
