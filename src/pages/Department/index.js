import React, {Component} from 'react';
import { connect } from 'react-redux';
import DepartPie from './DepartPie';
import Result from '../../components/Result';

class Department extends Component{
	render() {
		const { depart } = this.props;
		return (
			<Result {...this.props}>
				<DepartPie data={depart} />
			</Result>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state }
};

export default connect(mapStateToProps)(Department)