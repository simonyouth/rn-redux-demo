import Home from './home';
import { connect } from 'react-redux';

const mapStateToProps = ({getHomeData}) => {
	return { ...getHomeData }
};

export default connect(mapStateToProps)(Home)