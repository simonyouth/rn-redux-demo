import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './src/store/store';
import Outpatient from './src/pages/Outpatient';
import Home from './src/pages/Home';
import Department from './src/pages/Department';

const BottomNavigator = createBottomTabNavigator({
	Home: {
		screen: Home,
	},
	Patient: {
		screen: Outpatient,
	},
	Depart: {
		screen: Department,
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

