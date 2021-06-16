import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = ({ boards }) => ({
	boards,
});

const mapDispatchToProps = dispatch => {
	return {
		// updateBoardHandler: (data) => {
		// 	dispatch(updateBoards(data))
		// },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);