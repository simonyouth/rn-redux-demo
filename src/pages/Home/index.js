import Home from './home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { ...state }
};

export default connect(mapStateToProps)(Home)