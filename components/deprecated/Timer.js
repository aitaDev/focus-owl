import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Timer extends Component {
	constructor() {
		super();
		this.state = {
			time: {},
			seconds: 1500,
			showStart: true,
			showPause: false,
		};
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
		this.handleshowStart = this.handleshowStart.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			h: hours,
			m: minutes,
			s: seconds,
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		if (this.timer == 0 && this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		// Check if we're at zero.
		if (seconds == 0) {
			clearInterval(this.timer);
		}
	}
	handleshowStart() {
		this.setState({ showStart: !this.state.showStart });
	}

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
				<View
					style={{
						marginTop: 30,
						width: 200,
						height: 200,
						borderRadius: 200 / 2,
						backgroundColor: '#11FF9B',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: 'black', fontSize: 50 }}>
						{this.state.time.m} : {this.state.time.s}
					</Text>
					{this.state.showStart ? (
						<Button
							title='Start'
							onPress={() => {
								this.handleshowStart();
								this.startTimer();
							}}
							color='black'
						/>
					) : (
						<Button
							title='Pause'
							onPress={() => {
								alert(
									'tHeRe iS nO StOpPInG tHiS tRaIn, FULL STEAM AHEAD COMRADE!!!!'
								);
								clearInterval(this.timer);
								this.setState({
									seconds: 1500,
									showStart: true,
									showPause: false,
								});
							}}
							color='black'
						/>
					)}
				</View>
			</View>
		);
	}
}
