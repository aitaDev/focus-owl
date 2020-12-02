import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Text, View, Platform } from 'react-native';
import Home from './Home';
import AddTasks from './AddTasks';

const screens = createStackNavigator(
	{
		Home: { screen: Home },
		AddTasks: { screen: AddTasks },
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#fff',
			},
			headerTintColor: '#000000',
			headerTitleStyle: {
				color: '#696969',
			},
		},
	}
);

const AppNavigator = createAppContainer(screens);

class Main extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop:
						Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
				}}
			>
				<AppNavigator />
			</View>
		);
	}
}

export default Main;
