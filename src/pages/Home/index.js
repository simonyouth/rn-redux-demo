import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, View } from 'react-native';
import { requestPosts } from '../../actions/HomeAction';
import HomeTable from './HomeTable';
import { HOME } from '../../constants/API';
import {
	FETCH_FAIL,
} from '../../actions/HomeAction';
import Result from '../../components/Result';

class Home extends Component{
	componentDidMount() {
		this.props.dispatch(requestPosts(HOME));
	}
	// static getDerivedStateFromProps(props, state){
	// 	console.log(props)
	// }
	shouldComponentUpdate(nextProps) {
		return nextProps.loading !== this.props.loading;
	}
	
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
			return (
				<Result {...this.props}>
					<Text>ok,get</Text>
					<HomeTable />
				</Result>
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

 export default connect(mapStateToProps)(Home)
