import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtSearchBar, AtList, AtListItem, AtIcon } from 'taro-ui';
import { get, getApi, showToast } from '../../utils/util';
import './search.scss';

export default class Search extends Component {
	state = {
		value: '上海',
		location: '',
		list: [],
		type: '',
		ganmao: ''
	};

	componentDidMount() {
		console.log(this.$router.params.type);
		this.setState(
			{
				type: this.$router.params.type
			},
			() => {
				this.onActionClick();
			}
		);
	}

	handleChange = (value) => {
		this.setState(
			{
				value
			},
			() => {
				if (!this.state.value) {
					this.setState({
						location: '',
						list: ''
					});
				}
			}
		);
	};

	onActionClick = () => {
		if (this.state.value) {
			this.setState({
				location: this.state.value
			});
			if (this.state.type === '1') {
				get('weatherApi', { city: this.state.value }).then((res) => {
					console.log(res);
					const { data: { code, msg, ganmao } } = res;
					if (code !== 200) {
						showToast(msg);
					}
					this.setState({
						list: res.data.data.forecast,
						ganmao: res.data.data.ganmao
					});
				});
			} else {
				getApi('searchAuthors', { name: this.state.value }).then((res) => {
					const { data: { result } } = res;
					console.log(result);
					this.setState({
						list: result
					});
				});
			}
		}
	};

	handleBackClick = () => {
		console.log('返回');
		Taro.navigateBack(-1);
	};

	render() {
		const { value, list, location, type, ganmao } = this.state;
		const judge = type === '1';
		return (
			<View>
				{/* <View className="searchWrap">
					<AtIcon onClick={this.handleBackClick} className="searchBack" value="chevron-left" size="30" />
				</View> */}
				<AtSearchBar
					className="searchInput"
					placeholder=""
					value={value}
					onChange={this.handleChange}
					onActionClick={this.onActionClick}
				/>

				{judge ? (
					<View>
						<AtList>
							<Text>{location}未来5天天气情况如下：</Text>
							<View>{ganmao}</View>
							{list.map((item, index) => {
								return (
									<AtListItem
										// key={index}
										title={item.date + '的天气状况'}
										note={item.fengxiang + ' ' + item.type + ' ' + item.high + '~' + item.low}
									/>
								);
							})}
						</AtList>
					</View>
				) : (
					<View>
						{list.length > 0 ? (
							list.map((item, index) => {
								return (
									<View>
										<View className="at-article__h1">{item.name}</View>
										<View className="at-article__p">{item.desc}</View>
									</View>
								);
							})
						) : null}
					</View>
				)}
			</View>
		);
	}
}
