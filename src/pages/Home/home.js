import React, {Component} from 'react';
import { ScrollView, Text, View, StyleSheet, RefreshControl } from 'react-native';
import { requestPosts } from '../../actions/HomeAction';
import HomeLine from './HomeLine';
import { HOME } from '../../constants/API';
import Result from '../../components/Result';
import DepartPie from './DepartPie';

export default class Home extends Component{
	state = {
		refreshing: false,
	};
	
	componentDidMount() {
		this.props.dispatch(requestPosts(HOME));
	}
	
	shouldComponentUpdate(nextProps) {
		return nextProps.loading !== this.props.loading;
	}
	
	_onRefresh = () => {
		this.setState({
			refreshing: false,
		});
		this.props.dispatch(requestPosts(HOME));
	};
	
	render() {
		const { depart, line } = this.props;
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh}/>
				}>
				<Result {...this.props}>
					<View style={styles.item}>
						<Text>Home Table</Text>
						<HomeLine data={line}/>
					</View>
					
					<View style={styles.item}>
						<Text>Depart Chart</Text>
						<DepartPie data={depart}/>
					</View>
				</Result>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		padding: 5,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	}
});


