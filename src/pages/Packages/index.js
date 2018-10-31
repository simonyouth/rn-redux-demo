import React, {Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Result from '../../components/Result';
import { requestPosts } from '../../actions/PackagesAction';
import { PACKAGES } from '../../constants/API';

class Department extends Component{
	componentDidMount() {
		this.props.dispatch(requestPosts(PACKAGES))
	}
	
	onPress = (url) => {
		this.props.navigation.navigate('Details', {
			url
		})
	}
	
	render() {
		const { packages } = this.props;
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
	return { ...state.getPackages }
};

export default connect(mapStateToProps)(Department)