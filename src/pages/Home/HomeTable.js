import React from 'react';
import { Text, View } from 'react-native';
import {
	VictoryBar,
	VictoryChart,
	VictoryTheme,
} from 'victory-native';

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 }
];
const data1 = [
	{ quarter: 1.5, earnings: 1212 },
	{ quarter: 2.5, earnings: 11213 },
	{ quarter: 3.5, earnings: 33412 },
	{ quarter: 4.5, earnings: 23311 }
];


export default class HomeTable extends React.Component {
	render() {
		const { options } = this.props;
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<VictoryChart  theme={VictoryTheme.material}>
					<VictoryBar data={data} x="quarter" y="earnings" />
					<VictoryBar data={data1} x="quarter" y="earnings" />
				</VictoryChart>
			</View>
		)
	}
}