import Taro from '@tarojs/taro';
import { func } from 'prop-types';
export function formatTime(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	return (
		[ year, month, day ].map(formatNumber).join('/') + ' ' + [ hour, minute, second ].map(formatNumber).join(':')
	);
}

export function formatNumber(n) {
	n = n.toString();
	return n[1] ? n : '0' + n;
}

var index = require('../data/data_index.js');
var index_next = require('../data/data_index_next.js');
var discovery = require('../data/data_discovery.js');
var discovery_next = require('../data/data_discovery_next.js');

export function getData(url) {
	return new Promise(function(resolve, reject) {
		wx.request({
			url: url,
			data: {},
			header: {
				//'Content-Type': 'application/json'
			},
			success: function(res) {
				console.log('success');
				resolve(res);
			},
			fail: function(res) {
				reject(res);
				console.log('failed');
			}
		});
	});
}

export function getData2() {
	return index.index;
}

export function getNext() {
	return index_next.next;
}

export function getDiscovery() {
	return discovery.discovery;
}

export function discoveryNext() {
	return discovery_next.next;
}

// 豆瓣api
const apikey = '0df993c66c0c636e29ecbb5344252a4a';

const url = 'https://www.apiopen.top/';

const douUrl = 'https://api.apiopen.top/';

const cnodeApi = 'https://cnodejs.org/api/v1/';

export function get(uri, data) {
	return new Promise((resolve, reject) => {
		Taro.showLoading({
			title: '加载中...'
		});
		Taro.request({
			url: url + uri,
			data,
			success(res) {
				return resolve(res);
			},
			error(err) {
				return reject(err);
			},
			complete() {
				Taro.hideLoading();
			}
		});
	});
}

export function getApi(uri, data) {
	return new Promise((resolve, reject) => {
		Taro.showLoading({
			title: '加载中...'
		});
		Taro.request({
			url: douUrl + uri,
			data,
			success(res) {
				return resolve(res);
			},
			error(err) {
				return reject(err);
			},
			complete() {
				Taro.hideLoading();
			}
		});
	});
}

export function getNode(uri, data) {
	return new Promise((resolve, reject) => {
		Taro.showLoading({
			title: '加载中...'
		});
		Taro.request({
			url: cnodeApi + uri,
			data,
			success(res) {
				return resolve(res);
			},
			error(err) {
				return reject(err);
			},
			complete() {
				Taro.hideLoading();
			}
		});
	});
}

export function getStorage(key) {
	let str = Taro.getStorageSync(key);
	if (!str) {
		return '';
	}
	return JSON.stringify(str);
}

export function showToast(title) {
	Taro.showToast({
		title,
		icon: 'none'
	});
}

export function computedTime(time) {
	const nowTime = new Date().getTime();
	const oldTime = new Date(time);
	const newDate = nowTime - oldTime;
	//计算出相差天数
	var year = Math.floor(newDate / (24 * 3600 * 1000 * 30 * 12));
	if (year > 0.5) {
		return year + '年前';
	} else {
		var month = Math.floor(newDate / (24 * 3600 * 1000 * 30));
		if (month > 0.5) {
			return month + '个月前';
		} else {
			var day = Math.floor(newDate / (24 * 3600 * 1000));
			if (day > 0.5) {
				return day + '天前';
			} else {
				var hours = Math.floor(newDate / (3600 * 1000));
				if (hours > 0.5) {
					return hours + '小时前';
				} else {
					var minutes = Math.floor(newDate / (60 * 1000));
					if (minutes > 0.5) {
						return minutes + '分钟前';
					} else {
						var seconds = Math.floor(newDate / (60 * 1000));
						if (seconds > 0.5) {
							return seconds + '秒前';
						}
					}
				}
			}
		}
	}
}

// module.exports.getData = getData;
// module.exports.getData2 = getData2;
// module.exports.getNext = getNext;
// module.exports.getDiscovery = getDiscovery;
// module.exports.discoveryNext = discoveryNext;
// module.exports.get = get;
// module.exports.getApi = getApi;
// module.exports.getNode = getNode;
// module.exports.getStorage = getStorage;
// module.exports.showToast = showToast;

// 豆瓣
