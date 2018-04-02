import React from 'react';
import { connect } from 'react-redux';

const Stream = ({ tracks = [] }) => (
	<div>
	{ tracks.map(function(track, key) {
		return <div className='track' key={key}>{ track.title }</div>
	})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		tracks: state.tracks
	};
};

export default connect(mapStateToProps)(Stream);