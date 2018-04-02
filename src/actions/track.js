import * as actionTypes from '../constants/actionTypes';

export const setTracks = (tracks) => {
	return {
		type: actionTypes.SET_TRACKS,
		tracks
	};
};