import React from 'react';
import Echarts from 'native-echarts';

export default class HomeTable extends React.Component {
	render() {
		const options = this.props;
		return (
			<Echarts option={options}/>
		)
	}
}