import React, { Component } from 'react';
import {
	Text,
	Image,
	View
} from 'react-native';

export default class Search extends Component {

	static navigationOptions = {
		tabBarIcon: () => {
			return <Image source={require('../img/search.png')} style={{width:30, height: 30}} />
		}
	}

	render() {
		return(
			<View>
				<Text>View View</Text>
			</View>
		)
	}
}