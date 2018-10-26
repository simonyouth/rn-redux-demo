import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { requestPosts } from '../../actions/HomeAction';
import HomeTable from './HomeTable';
import { HOME } from '../../constants/API';

class Home extends Component{
	componentDidMount() {
		this.props.dispatch(requestPosts(HOME));
	}
	static getDerivedStateFromProps(props, state){
		console.log(props)
	}
	// shouldComponentUpdate(nextProps) {
	// 	alert(nextProps.loading)
	// 	if (nextProps.loading === this.props.loading) {
	// 		return false
	// 	}
	// 	return true
	// }
	render() {
		console.log(this.props);
		return (
				<View>
					<Text>{this.props.loading}</Text>
					{/*<HomeTable/>*/}
				</View>
		)
	}
}

const mapStateToProps = (state) => {
 
	return { ...state }
};

 export default connect(mapStateToProps)(Home)
