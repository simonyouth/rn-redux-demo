import React, {Component} from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {
	FETCH_FAIL,
	FETCH_LOADING,
	FETCH_SUCCESS,
} from '../actions/HomeAction';


export default class Result extends Component {
	render() {
		const { loading, type} = this.props;
		if (loading && type === FETCH_LOADING) {
			return (
				<View style={styles.container}>
			  	<ActivityIndicator size="large"/>
				</View>
			)
		} else if (type === FETCH_SUCCESS) {
			return (
				<View style={styles.container}>
					{this.props.children}
				</View>
			)
		}else {
			return (
				<View style={styles.container}>
					<Text>Failed...</Text>
				</View>
			)
		}
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	}
});

