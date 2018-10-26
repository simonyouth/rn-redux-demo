import React from 'react';
import { Text, View } from 'react-native';
import {
	VictoryChart,
	VictoryScatter,
	VictoryTheme,
} from 'victory-native';

export default class Scatter extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<VictoryChart
				theme={VictoryTheme.material}
				domain={{ x: [0, 50], y: [0, 100] }}
			>
				<VictoryScatter
					style={{ data: { fill: "#c43a31" } }}
					size={7}
					data={data}
				/>
			</VictoryChart>
		)
	}
}