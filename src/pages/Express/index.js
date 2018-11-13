import React, {Component} from 'react';
import { connect } from 'react-redux';
import Scatter from "./Scatter";
import Result from '../../components/Result';

class Outpatient extends Component{
	render() {
		const { patient } = this.props;
		return (
			<Result {...this.props}>
				<Scatter data={patient}/>
			</Result>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state }
};

export default connect(mapStateToProps)(Outpatient)