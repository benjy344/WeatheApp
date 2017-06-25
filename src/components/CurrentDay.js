import React, { Component } from 'react';
import {
	View,
	Image,
	Text
} from 'react-native'


export default class CurrentDay extends Component {

	static propTypes = {
		temp: React.PropTypes.number,
		code: React.PropTypes.string,
		city: React.PropTypes.string,
		country: React.PropTypes.string,
	}

	constructor (props) {
		super(props)

		this.width  = 179
		this.height = 130
	}		
	

	setImg(){
		switch (this.props.code) {
			case "32" :
			case "33" :
			case "34" :
			case "36" :
				this.height = 179,
				this.width  = 179
				
				return(
					require(`../img/weather/32.png`)
					)
				break;
			case "8" :
			case "9" :
			case "10" :
				this.height = 140,
				this.width  = 179
					
				return(					
					require(`../img/weather/11.png`)
					)
				break;
			case "11" :
			case "12" :
				this.height = 140,
				this.width  = 179
					
				return(
					require(`../img/weather/12.png`)
					)
				break;
			case "5" :
			case "6" :
			case "7" :
			case "13" :
			case "14" :
			case "15" :
			case "16" :
			case "18" :
			case "25" :
			case "41" :
			case "42" :
			case "43" :
			case "46" :
				this.height = 145,
				this.width  = 179
					
				return(
					require(`../img/weather/16.png`)
					)
				break;
			case "19" :
			case "20" :
			case "21" :
			case "22" :
				this.height = 140,
				this.width  = 149
					
				return(
					require(`../img/weather/20.png`)
					)
				break;
			case "24" :
				this.height = 148,
				this.width  = 169
					
				return(
					require(`../img/weather/24.png`)
					)
				break;

			case "17" :
			case "35" :
				this.height = 140,
				this.width  = 179
					
				return(
					require(`../img/weather/17.png`)
					)
				break;
			case "27" :
			case "28" :
			case "29" :
			case "30" :
			case "44" :
				this.height = 130,
				this.width  = 179
					
				return(
					require(`../img/weather/28.png`)
					)
				break;
			case "0" :
			case "1" :
			case "3" :
			case "2" :
			case "37" :
			case "38" :
			case "39" :
			case "4" :
			case "45" :
			case "47" :
				this.height = 135,
				this.width  = 185
					
				return(
					require(`../img/weather/4.png`)
					)
				break;
			case "26" :
				this.height = 110,
				this.width  = 185
					
				return(
					require(`../img/weather/26.png`)
					)
				break;
			case "40" :
				this.height = 165,
				this.width  = 185
					
				return(
					require(`../img/weather/40.png`)
					)
				break;
			default:
				this.height = 133,
				this.width  = 185
					
				return(
					require(`../img/weather/28.png`)
				)
				break;
		}
	}

	render() {

		
		return (
			<View style={{flex:1, alignItems:'center', justifyContent: 'center'}} >
				<Image source={ this.setImg() } style={{width:this.width, height: this.height}} />
				<Text style={{color:'#fff', fontSize:60, paddingVertical: 20}}>{this.props.temp}°C</Text>
				<Text style={{color:'#fff', fontSize:22 }}>{this.props.city.toUpperCase()}, {this.props.country.toUpperCase()}</Text>				
			</View>
		)
	}

}