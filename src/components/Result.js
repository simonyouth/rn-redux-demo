import React, {Component} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {
	FETCH_FAIL,
} from '../actions/HomeAction';


export default class Result extends Component {
	render() {
		const { loading, type} = this.props;
		if (loading) {
			return (
				<View style={styles.container}>
			  	<ActivityIndicator size="large"/>
				</View>
			)
		} else if (type === FETCH_FAIL) {
			return (
				<View>
					<Text>Failed...</Text>
				</View>
			)
		}  else {
			return (
				<View style={styles.container}>
					{this.props.children}
				</View>
			)
		}
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		margin: 10,
	}
});

