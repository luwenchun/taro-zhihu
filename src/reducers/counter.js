// import { ADD, MINUS } from '../constants/counter';

const INITIAL_STATE = {
	num: 0,
	price: 1000,
	focus: {
		looks: 0,
		items: []
	}
};

export default function counter(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				num: state.num + 1
			};
		case 'Focus':
			const title = state.focus.items.findIndex((v) => v.title == action.title);

			if (title > -1) {
				//存在
				return state;
			} else {
				//不存在
				// state.focus.items.concat({ title: action.title })
				state = {
					...state,
					focus: {
						...state.focus,
						looks: state.focus.looks + 1,
						items: state.focus.items.concat({ title: action.title })
					}
				};
			}

			return state;
		case 'ADD1':
			return {
				...state,
				price: state.price + 10
			};
		case 'MINUS':
			return {
				...state,
				num: state.num - 1
			};
		default:
			return state;
	}
}
