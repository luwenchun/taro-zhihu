import Taro from '@tarojs/taro';
import { AtSearchBar } from 'taro-ui';
export default class Index extends Taro.Component {
	constructor() {
		super(...arguments);
		this.state = {
			value: ''
		};
	}
	onChange(value) {
		this.setState({
			value: value
		});
	}
	render() {
		return <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />;
	}
}
