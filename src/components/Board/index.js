import { connect } from 'react-redux';
import Board from './Board';
import { increment } from '../../data/actions';

const mapStateToProps = ({ initialTest }) => ({
	initialTest,
});

const mapDispatchToProps = dispatch => {
	return {
		handleIncrement: (data) => {
			dispatch(increment(data))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);