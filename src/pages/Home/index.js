import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { requestPosts } from '../../actions/HomeAction';
import HomeTable from './HomeTable';
import { TEST } from '../../constants/API';

class Home extends Component{
	render() {
		this.props.dispatch(requestPosts(TEST));
		console.log(this.props);
		return (
				<View>
					<Text>{this.props.response}</Text>
					<HomeTable/>
				</View>
		)
	}
}

const mapStateToProps = (state) => {
 	console.log(state)
	return { ...state }
};

 export default connect(mapStateToProps)(Home)
