import { connect } from 'react-redux';
import Home from './Home';


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