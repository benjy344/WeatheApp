import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	ActivityIndicator
} from 'react-native';
import axios from 'axios'
import WeatherApi from '../functions/WeatherApi'
import CurrentDay from './CurrentDay'
import ListDay from './ListDay'

export default class Main extends Component {

	static navigationOptions = {
		tabBarIcon: () => {
			return <Image source={require('../img/menu.png')} style={{width:40, height: 10}} />
		}
	}

	constructor (props) {
		super(props)
		this.state = {
			city: (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.city) ? this.props.navigation.state.params.city : "Paris",
			WeatherData: null,
			longitude: null,
			latitude:  null,
			opt: {
				location: null,//this.props.navigation.state.params.city,
            	woeid: '',
            	unit: 'f',
			}

		}
		this.Weather = new WeatherApi
		this.fetchData()
	}

	fetchData() {
		console.log(this.state.longitude)
		let options = {
            location: this.state.city,
            woeid: '',
            unit: 'f',            
        }

        let now        = new Date();
        let weatherUrl = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '&diagnostics=true&callback=jQuery21303643125147881494_1492201801052&q=';
        let weather    = new Object();

        if(options.location !== '') {
            /* If latitude/longitude coordinates, need to format a little different. */
            let location = '';
            if(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(options.location)) {
                location = '(' + options.location + ')';
            } else {
                location = options.location;
            }
            weatherUrl += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '") and u="' + options.unit + '"';
        } else if(options.woeid !== '') {
            weatherUrl += 'select * from weather.forecast where woeid=' + options.woeid + ' and u="' + options.unit + '"';
        } else {
            //options.error('Could not retrieve weather due to an invalid location.');
            return false;
        }

		axios.get(weatherUrl)
			.then((response)=> {
				let data = response.data.replace('/**/jQuery21303643125147881494_1492201801052(', '')
                    data = data.substring(0, data.length-2)
                    data = JSON.parse(data)
				if(data != null) this.setState({WeatherData: this.Weather.parseWeather(data, options)})
					console.log(this.state.WeatherData);
			})
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.navigation.state.params){
			this.setState({city: this.props.navigation.state.params.city, WeatherData: null})
			setTimeout(() =>{
				this.fetchData()
			}, 1000)
			
		}
	}


	componentDidMount() {
		console.log('componentDidMount')
		console.log(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(
			(position) => {
				let initialPosition = JSON.stringify(position);
				console.log(position)
				this.setState({
					longitude: position.coords.longitude,
					latitude:  position.coords.latitude
				});
			},
			(error) => alert(JSON.stringify(error)),

			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

			);

		this.watchID = navigator.geolocation.watchPosition((position) => {
			let lastPosition = JSON.stringify(position);
			this.setState({lastPosition});
		});
		console.log(this.state.longitude)
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}


	render() {

		if(this.state.WeatherData === null) {
			return (
				<View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
					<ActivityIndicator 
						size="large"
						color="#fff"
					/>
				</View>
			)
		} else if (this.state.WeatherData === 'Error') {
			return(
				<View>
					<Text style={{color: 'red'}}>Il y a eu une erreur...</Text>
				</View>
			)
		} else {			
			return(
				<View style={{flex:1, alignItems:'center'}}>
					<View style={{flex:3, justifyContent: 'center', alignItems:'center'}}>
						<CurrentDay 
						temp={this.state.WeatherData.alt.temp}
						code={String(this.state.WeatherData.code)}
						city={this.state.WeatherData.city}
						country={this.state.WeatherData.country}
						/>
					</View>
					<View style={{flex:2}}>
						<ListDay list={this.state.WeatherData.forecast} />
					</View>
				</View>
			)	
	    }
	}
}