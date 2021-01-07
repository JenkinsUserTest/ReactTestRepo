import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';

describe('Test  Counter Component',()=>{

it('test initial value',()=>{

    const wrapper=shallow(<Counter/>);
    expect(wrapper.find('p').text()).toEqual("0");
})

it('test paragraph value on click',()=>{
    const wrapper=shallow(<Counter/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual("1");
})
})