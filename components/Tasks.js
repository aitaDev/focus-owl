import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';

export default class Tasks extends Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: '#1c1c1c',
					flex: 2,
					borderRadius: 25,
					margin: 20,
					padding: 20,
				}}
			>
				<ScrollView>
					<Text style={{ color: '#11FF9B', fontSize: 16 }}>
						• Work on economics assignment
					</Text>
					<Text style={{ color: '#11FF9B', fontSize: 16 }}>
						• Finish tidying notes from meeting
					</Text>
					<Text style={{ color: '#11FF9B', fontSize: 16 }}>
						• Overlook draft from project
					</Text>
					<Text style={{ color: '#11FF9B', fontSize: 16 }}>
						• Work on fixing bugs from branch
					</Text>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({});
