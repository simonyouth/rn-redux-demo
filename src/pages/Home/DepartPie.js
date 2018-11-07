import React from 'react';
import { View } from 'react-native';
import {
	VictoryPie
} from 'victory-native';

export default class DepartPie extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<View>
				<VictoryPie
					radius={120}
					data={data}
					colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
					events={[{
						target: "data",
						eventHandlers: {
							onClick: () => {
								return [
									{
										target: "data",
										mutation: (props) => {
											const fill = props.style && props.style.fill;
											return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
										}
									}, {
										target: "labels",
										mutation: (props) => {
											return props.text === "clicked" ? null : { text: "clicked" };
										}
									}
								];
							}
						}
					}]}
				/>
			</View>
		)
	}
}