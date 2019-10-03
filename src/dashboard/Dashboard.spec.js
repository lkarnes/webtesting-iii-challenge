import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from '../controls/Controls';

test('renders correctly', ()=> {
    const wrapper = render(<Dashboard/>)
    expect(wrapper.baseElement).toMatchSnapshot();
})

