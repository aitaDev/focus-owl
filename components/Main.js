import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View, Platform } from 'react-native';

// const DirectoryNavigator = createStackNavigator(
// 	{
// 		Directory: { screen: Directory },
// 		CampsiteInfo: { screen: CampsiteInfo },
// 	},
// 	{
// 		initialRouteName: 'Directory',
// 		defaultNavigationOptions: {
// 			headerStyle: {
// 				backgroundColor: '#5637DD',
// 			},
// 			headerTintColor: '#fff',
// 			headerTitleStyle: {
// 				color: '#fff',
// 			},
// 		},
// 	}
// );

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#5637DD',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff',
			},
		},
	}
);

const AppNavigator = createAppContainer(HomeNavigator);

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
