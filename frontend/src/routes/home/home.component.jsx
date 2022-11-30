import { useEffect, useState } from 'react';

const Home = () => {
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
		<div>
			{!!posts && (
				<div>
					{posts.map((post) => (
						<p key={post._id}>{post.title}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default Home;
