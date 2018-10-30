import React from 'react';
import {
	VictoryPie
} from 'victory-native';

export default class DepartPie extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<VictoryPie
			  data={data}
			/>
		)
	}
}