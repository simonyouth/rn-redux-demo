import React from 'react';
import {
	VictoryChart,
	VictoryBar,
	VictoryLabel,
} from 'victory-native';


export default class HomeBar extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<VictoryChart
				>
				<VictoryBar
					labels={({x, y}) => `${x}:${y}`}
					labelComponent={<VictoryLabel dx={15}/>}
					alignment="start"
					style={{data: {fill: '#c43a31'}}}/>
			</VictoryChart>
		)
	}
}