import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';

export default class AddTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: {
				name: '',
				id: '',
				date: new Date(),
			},
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Add a task...',
			headerRight: () => (
				<Icon
					name='plus-circle'
					type='font-awesome'
					color='#11FF9B'
					onPress={() => navigation.navigate('AddTasks')}
					size={32}
					style={{ marginRight: 10, fontWeight: '200' }}
					iconStyle={{ fontWeight: '200' }}
				/>
			),
		};
	};

	addTask() {}

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
				<View
					style={{
						flex: 1,
						alignContent: 'center',
						justifyContent: 'center',
						borderBottomColor: 'black',
					}}
				>
					<Input
						inputContainerStyle={{ borderBottomWidth: 0 }}
						value={this.state.task}
						onChangeText={(e) => this.setState({ task: e })}
						style={{
							backgroundColor: '#1c1c1c',
							borderRadius: 25,
							margin: 20,
							padding: 20,
							color: '#11FF9B',
						}}
					/>
				</View>
			</View>
		);
	}
}
