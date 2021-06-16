import { connect } from 'react-redux';
import Home from './Home';
import { getBoards } from '../../data/actions/api';
 

const mapStateToProps = ({ boards }) => ({
	boards,
});

const mapDispatchToProps = (dispatch) => ({
	loadBoards: () => dispatch(getBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);