import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
	Modal,
	VirtualizedList,
} from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import Timer from './Timer';
import CurrentTask from './CurrentTask';
import UpcomingTasks from './UpcomingTasks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tasksList = [
	{ name: 'Assignment for Economics', id: '1234' },
	{ name: 'Debug Main Component', id: '442' },
	{ name: 'Work on proposal agreement', id: '5235' },
	{ name: 'Yoga', id: '123' },
	{ name: 'Research Big O notation', id: '2434' },
	{ name: 'Incorporate algorithm to sort data', id: '142' },
];

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: true,
			tasksList: [],
			task: {
				name: '',
				id: '',
			},
		};
	}
	toggleModal() {
		this.setState({ showModal: !this.state.showModal });
	}
	resetForm() {
		this.setState({
			showModal: false,
			// tasks: [],
			task: {
				name: '',
				id: '',
			},
		});
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Focus Owl',
		};
	};
	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
				<Timer />
				<TouchableHighlight
					onPress={() => {
						this.toggleModal();
					}}
				>
					<View style={styles.addNew}>
						<Icon
							name='plus-circle'
							type='font-awesome'
							color='black'
							size={20}
							style={{ marginRight: 10, fontWeight: '200' }}
							iconStyle={{ fontWeight: '200' }}
						/>
						<Text style={{ color: 'black', fontSize: 14, fontWeight: '200' }}>
							New Task
						</Text>
					</View>
				</TouchableHighlight>
				<Modal
					animationType={'slide'}
					transparent={true}
					visible={this.state.showModal}
					onRequestClose={() => this.toggleModal()}
				>
					<View style={styles.modal}>
						<Text style={styles.modalTitle}>New Task</Text>
						<Text style={styles.modalText}>Name of Task:</Text>
						<Input
							inputContainerStyle={{ borderBottomWidth: 0 }}
							value={this.state.task}
							onChangeText={({ task }) =>
								this.setState({ task: { name: task } })
							}
							style={styles.modalInput}
						/>
						<View
							style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}
						>
							<Button
								onPress={() => {
									this.toggleModal();
									this.resetForm();
								}}
								color='#11FF9B'
								title='Add'
								buttonStyle={{
									margin: 20,
									backgroundColor: '#11FF9B',
								}}
								titleStyle={{
									color: 'black',
								}}
								type='outline'
							/>
							<Button
								onPress={() => {
									this.toggleModal();
									this.resetForm();
								}}
								title='Cancel'
								buttonStyle={{
									margin: 20,
									backgroundColor: 'red',
								}}
								titleStyle={{
									color: 'black',
								}}
								type='outline'
							/>
						</View>
					</View>
				</Modal>
				<ScrollView>
					<Text style={styles.test}>{this.state.task.name}</Text>
					<CurrentTask tasksList={tasksList} />
					<UpcomingTasks tasksList={tasksList} />
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'black',
		margin: 30,
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 24,
		borderWidth: 2,
		borderColor: '#11FF9B',
	},
	modalTitle: {
		fontSize: 44,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#11FF9B',
		marginBottom: 20,
		fontWeight: '200',
	},
	modalText: {
		fontSize: 18,
		margin: 10,
	},
	modalInput: {
		backgroundColor: '#1c1c1c',
		borderRadius: 24,
		margin: 20,
		padding: 20,
		color: '#11FF9B',
	},
	test: {
		color: 'white',
	},
	addNew: {
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 20,
		marginRight: 20,
		padding: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#11FF9B',
		borderRadius: 25,
	},
});
