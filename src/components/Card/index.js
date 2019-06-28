import { connect } from 'react-redux';
import Card from './Card';
import { updateCard } from '../../data/actions';

const mapStateToProps = ({ boards }) => ({
	boards,
});

const mapDispatchToProps = dispatch => {
	// return {
	// 	: (data) => {
	// 		dispatch(updateCard(data))
	// 	},
	// };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);