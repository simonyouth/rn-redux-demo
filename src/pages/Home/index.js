import Home from './home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { ...state.getHomeData }
};

export default connect(mapStateToProps)(Home)