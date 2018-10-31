import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './src/store/store';
import Outpatient from './src/pages/Outpatient';
import Home from './src/pages/Home';
import Department from './src/pages/Packages';
import Details from './src/pages/Webview';

const HomeStack = createStackNavigator({
	Profile: {
		screen: Home,
		navigationOptions: () => ({
			title: `Home`,
		}),
	}
});

const PatientStack = createStackNavigator({
	Profile: {
		screen: Outpatient,
		navigationOptions: () => ({
			title: 'Patient',
		})
	}
});

const DepartStack = createStackNavigator({
	Profile: {
		screen: Department,
		navigationOptions: () => ({
			title: 'Depart',
		})
	},
	Details: {
		screen: Details,
		navigationOptions: () => ({
			header: null
		})
	}
});

const BottomNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeStack,
	},
	Patient: {
		screen: PatientStack,
	},
	Depart: {
		screen: DepartStack,
	}
}, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let iconName;
			if (routeName === 'Home') {
				iconName = `layers${focused ? '' : '-outline'}`;
			} else if (routeName === 'Patient') {
				iconName = `account-minus${focused ? '' : '-outline'}`;
			} else if (routeName === 'Depart') {
				iconName = `magnify-minus${focused ? '' : '-outline'}`;
			}

			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
		},
	}),
	tabBarOptions: {
		activeTintColor: 'tomato',
		inactiveTintColor: 'gray',
	},
});

export default class App extends React.Component{
	render() {
		return (
			<Provider store={store}>
				<BottomNavigator/>
			</Provider>
		)
	}
}

