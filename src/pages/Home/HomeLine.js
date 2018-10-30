import React from 'react';
import {
	VictoryLine,
	VictoryChart,
	VictoryLabel,
	VictoryLegend,
} from 'victory-native';


export default class HomeLine extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<VictoryChart>
				<VictoryLine
					width={300}
					labels={(datum) => datum.y}
					labelComponent={<VictoryLabel renderInPortal dy={-5}/>}
					data={data}/>
			</VictoryChart>
		)
	}
}