import React from 'react';
import {render, fireEvent, getByText} from '@testing-library/react';

import Display from './Display';

test('defualts to unlocked and open', ()=>{
    const {getByText} = render(<Display/>)
    getByText(/unlocked/i)
    getByText(/open/i)
})

test('displays if gate is open/closed and if its locked/unlocked', ()=>{
    const locked = false;
    const closed = true;

     const {getByText}= render(
        <Display
        locked={locked}
         closed={closed}
        />
    )


    if(locked === true) {
        getByText(/Locked/i)
        getByText(/Closed/i)
    }else{
        getByText(/unlocked/i)
    }
    if(closed === false && locked === false) {
        getByText(/open/i)
        getByText(/unlocked/i)
    }
})