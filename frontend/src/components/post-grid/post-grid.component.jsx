import { useEffect, useState } from 'react';
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
			{!!posts &&
				posts.map((post) => (
					<PostCard
						key={post._id}
						post={post}
					/>
				))}
		</div>
	);
};
export default PostGrid;
