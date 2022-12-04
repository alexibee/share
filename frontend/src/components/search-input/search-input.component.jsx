import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import './search-input.styles.scss';

const SearchInput = () => {
	return (
		<div className='search-container'>
			<Paper
				component='form'
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: '200px',
					height: '30px',
					borderRadius: '15px',
					border: '1px solid lightgrey',
					boxShadow: 'none',
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='search for an entry'
					inputProps={{ 'aria-label': 'search for an entry' }}
				/>
				<IconButton
					type='button'
					sx={{ p: '8px', height: '30px', width: '30px' }}
					aria-label='search'
				>
					<SearchIcon />
				</IconButton>
			</Paper>
		</div>
	);
};

export default SearchInput;
