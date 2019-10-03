import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Controls from './Controls'

test('renders controls', async ()=>{
    let locked = true;
    let closed = true;
    const toggleClosedMock = jest.fn();
    const toggleLockedMock = jest.fn();

    const { getByText} = render(
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={toggleLockedMock}
          toggleClosed={toggleClosedMock}
        />
    )
    const closeButton = getByText(/Open Gate/i)
    fireEvent.click(closeButton)
    if(locked === false){
        expect(toggleClosedMock).toHaveBeenCalled();
    }else{
        expect(toggleClosedMock).not.toHaveBeenCalled();
    }
    const lockButton = getByText(/unlock gate/i)
    fireEvent.click(lockButton)
    expect(toggleLockedMock).toHaveBeenCalled();
    

})