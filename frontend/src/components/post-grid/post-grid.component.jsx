import { useEffect, useState } from 'react';
import './post-grid.styles.scss';
import PostCard from '../post-card/post-card.component';

const PostGrid = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/posts');
			const json = await response.json();

			if (response.ok) {
				setPosts(json);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className='post-grid'>
			<div className='column-container'>
				<div className='column'>
					{!!posts &&
						posts.map((post) => (
							<PostCard
								key={post._id}
								post={post}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
export default PostGrid;
