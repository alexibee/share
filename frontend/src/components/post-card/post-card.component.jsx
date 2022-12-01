import './post-card.styles.scss';
import Card from '@mui/material/Card';
import {
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';

const PostCard = ({ post }) => {
	return (
		<Card sx={{ minWidth: 400, m: 3 }}>
			<CardHeader title={post.title} />
			<CardContent>
				<Typography paragraph>{post.content}</Typography>
				<Typography
					sx={{ mb: 1.5 }}
					color='text.secondary'
				>
					{post.createdAt}
				</Typography>
			</CardContent>
			{/* <CardActions>
				<ExpandMoreIcon />
			</CardActions> */}
		</Card>
	);
};

export default PostCard;
