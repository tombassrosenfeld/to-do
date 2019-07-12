import { connect } from 'react-redux';
import Board from './Board';
import { increment } from '../../data/actions';

const mapStateToProps = ({ boards }) => ({
	boards,
	
});

const mapDispatchToProps = dispatch => {
	return {
		handleIncrement: () => {
			dispatch(increment())
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);