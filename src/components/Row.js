import React, { Component } from 'react'
import {
	View,
	Text,
	Image
} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'



export default class Row extends Component {

	static propTypes = {
		day: React.PropTypes.object,
	}

	constructor (props) {
		super(props)
		this.state = {
			list: this.props.list
		}

		this.width  = 79
		this.height = 30
		
	}

	render() {

		return(
			<View style={{ alignItems:'center', borderLeftWidth:(this.props.day.index != 0 ? 1 : 0), borderColor:"#fff", padding:7}}>
				<Text style={{color:'#fff', fontSize:18, marginBottom: 10}}>{this.day()}</Text>
				<View style={{height:34, marginBottom: 10, alignItems:'center', justifyContent: 'center' }} >
					<Image source={ this.setImg() } style={{width:this.width, height: this.height}} />
				</View>
				<Text style={{color:'#fff', fontSize:18}}>{ this.getTemp('f', this.props.day.item.high, this.props.day.item.low ) }°C</Text>
			</View>
			)	
		
	}

	day() {
		let parseDay = moment(this.props.day.item.date, 'DD MMM YYYY', 'fr')
		moment.locale('fr')
		return moment(parseDay).format("dd")
	}

	getTemp(unit, tempMax, tempMin) {
	 	let temp = (parseInt(tempMax) + parseInt(tempMin))*0.5
        if(unit === 'f') {
            return Math.round((5.0/9.0)*(temp-32.0));
        } else {
            return Math.round((9.0/5.0)*temp+32.0);
        }
    }

    setImg(){
   		switch (this.props.day.item.code) {
			case "32" :
			case "33" :
			case "34" :
			case "36" :
				this.height = 34,
				this.width  = 34
				
				return(
					require(`../img/weather/32.png`)
					)
				break;
			case "8" :
			case "9" :
			case "10" :
				this.height = 30,
				this.width  = 39
					
				return(					
					require(`../img/weather/11.png`)
					)
				break;
			case "11" :
			case "12" :
				this.height = 30,
				this.width  = 39
					
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
				this.height = 32,
				this.width  = 39
					
				return(
					require(`../img/weather/16.png`)
					)
				break;
			case "19" :
			case "20" :
			case "21" :
			case "22" :
				this.height = 30,
				this.width  = 39
					
				return(
					require(`../img/weather/20.png`)
					)
				break;
			case "24" :
				this.height = 34,
				this.width  = 39
					
				return(
					require(`../img/weather/24.png`)
					)
				break;

			case "17" :
			case "35" :
				this.height = 30,
				this.width  = 39
					
				return(
					require(`../img/weather/17.png`)
					)
				break;
			case "27" :
			case "28" :
			case "29" :
			case "30" :
			case "44" :
				this.height = 28,
				this.width  = 39
					
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
				this.height = 28,
				this.width  = 39
					
				return(
					require(`../img/weather/4.png`)
					)
				break;
			case "26" :
				this.height = 23,
				this.width  = 39
					
				return(
					require(`../img/weather/26.png`)
					)
				break;
			case "40" :
				this.height = 35,
				this.width  = 39
					
				return(
					require(`../img/weather/40.png`)
					)
				break;
			default:
				this.height = 28,
				this.width  = 39
					
				return(
					require(`../img/weather/28.png`)
				)
				break;
		}
	}
}