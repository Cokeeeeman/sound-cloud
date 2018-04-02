import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.SET_TRACKS:
		return setTracks(state, action);
	default:
		return state;
	}
};

const setTracks = (state, action) => {
	const { tracks } = action;
	return [ ...state, ...tracks ];
};