import { connect } from 'react-redux';
import Home from './Home';
import { updateBoard } from '../../data/actions';

const mapStateToProps = ({ boards }) => ({
	boards,
});

const mapDispatchToProps = dispatch => {
	return {
		// handleBoardUpdate: (data) => {
		// 	dispatch(updateBoard(data))
		// },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);