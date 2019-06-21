import { connect } from 'react-redux';
import Board from './Board';
import { increment } from '../../data/actions';

const mapStateToProps = ({ initialTest, boards }) => ({
	initialTest,
	boardTitle: boards[0].title,
	lists: boards[0].lists,

});

const mapDispatchToProps = dispatch => {
	return {
		handleIncrement: () => {
			dispatch(increment())
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);