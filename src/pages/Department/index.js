import React, {Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Result from '../../components/Result';

class Department extends Component{
	
	onPress = (url) => {
		this.props.navigation.navigate('Details', {
			url
		})
	}
	
	render() {
		return (
			<View>
				<TouchableOpacity
					onPress={() => this.onPress('https://github.com/facebook/react-native')}
				>
					<Text> Touch Touch Me </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state }
};

export default connect(mapStateToProps)(Department)