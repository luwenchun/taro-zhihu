// import {
//   ADD,
//   MINUS
// } from '../constants/counter'

export const add = () => {
	return {
		type: 'ADD'
	};
};

export const focus = (title) => {
	return {
		type: 'Focus',
		title
	};
};
export const add1 = () => {
	return {
		type: 'ADD1'
	};
};
export const minus = () => {
	return {
		type: 'MINUS'
	};
};

// 异步的action
export function asyncAdd() {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(add());
		}, 2000);
	};
}
