import Stream from './Stream';
import { shallow } from 'enzyme';

describe('Stream', () => {
	const props = {
		tracks: [{ title: 'x' }, { title: 'y' }]
	};

	it('renders 2 elements with class ".track"', () => {
		const component = shallow(<Stream { ...props } />);
		expect(component.find('.track')).to.have.length(2);
	});
});