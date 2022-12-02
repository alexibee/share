import './post-card.styles.scss';

const PostCard = ({ post }) => {
	return (
		<div className='post-card'>
			<header>{post.title}</header>
			<article>{post.content}</article>
			<footer>{post.createdAt}</footer>
		</div>
	);
};

export default PostCard;
