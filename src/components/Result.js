import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {
	FETCH_FAIL,
} from '../actions/HomeAction';


export default class Result extends Component {
	render() {
		const { loading, type} = this.props;
		if (loading) {
			return (
				<ActivityIndicator size="large"/>
			)
		} else if (type === FETCH_FAIL) {
			return (
				<View>
					<Text>Failed...</Text>
				</View>
			)
		}  else {
			return (
				<View>
					<Text>Chart Name</Text>
					{this.props.children}
				</View>
			)
		}
	}
}

