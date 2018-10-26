import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import {
	FETCH_FAIL,
} from '../../actions/HomeAction';
import Scatter from "./Scatter";

class Outpatient extends Component{
	Ui = () => {
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
			const { patient } = this.props;
			return (
				<View>
					<Text>ok, patient</Text>
					<Scatter data={patient}/>
				</View>
			)
		}
	};
	
	render() {
		const { Ui } = this;
		return (
			<Ui/>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state }
};

export default connect(mapStateToProps)(Outpatient)