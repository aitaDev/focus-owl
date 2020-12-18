import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View, Platform } from 'react-native';
import Home from './Home';

const screens = createStackNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'black',
				borderBottomWidth: 0,
			},
			headerTintColor: '#11FF9B',
			headerTitleStyle: {
				color: '#11FF9B',
				fontSize: 36,
				fontWeight: '200',
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
