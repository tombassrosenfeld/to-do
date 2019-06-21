import { connect } from 'react-redux';
import List from './List';
import { updateCard } from '../../data/actions';

// const mapStateToProps = ({  }) => ({
// 	,
// });

const mapDispatchToProps = dispatch => {
	return {
		: (data) => {
			dispatch(updateCard(data))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);