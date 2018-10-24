import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { select } from '../../actions/HomeAction';

class Home extends Component{
	render() {
		this.props.dispatch(select('may be just test'));
		console.log(this.props);
		return (
				<View>
					<Text>{this.props.response}</Text>
				</View>
		)
	}
}

const mapStateToProps = (state) => {
 	console.log(state)
	return { ...state }
};

 export default connect(mapStateToProps)(Home)
