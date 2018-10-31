import React, {Component} from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	FlatList,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Result from '../../components/Result';
import { requestPosts } from '../../actions/PackagesAction';
import { PACKAGES } from '../../constants/API';

class Department extends Component{
	componentDidMount() {
		this.props.dispatch(requestPosts(PACKAGES))
	}
	
	onPress = (url) => {
		this.props.navigation.navigate('Details', {
			url
		})
	};
	
	renderItem = ({item}) => {
		return (
			<View style={styles.itemContainer}>
				<TouchableOpacity onPress={() => this.onPress(item.url)}>
					<Text style={styles.itemName}>{item.name}</Text>
					<Text style={styles.itemDesc}>{item.desc}</Text>
				</TouchableOpacity>
			</View>
		)
	}
	
	render() {
		const { packages } = this.props;
		console.log(this.props)
		return (
			<FlatList
				renderItem={this.renderItem}
				data={packages}
				initialNumToRender={6}/>
		)
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		paddingLeft: 10,
		paddingTop: 15,
		paddingBottom: 15,
		borderRadius: 4,
		backgroundColor: '#fff',
	},
	itemName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	itemDesc: {
		marginTop: 5,
		fontSize: 13,
	}
});

const mapStateToProps = (state) => {
	return { ...state.getPackages }
};

export default connect(mapStateToProps)(Department)