import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const { window } = new JSDOM();
const { document } = (new JSDOM()).window;

global.document = document;
global.window = window;

Object.keys(window).forEach((key) => {
  	if (!(key in global)) {
    	global[key] = window[key];
  	}
});

global.React = React;
global.expect = expect;