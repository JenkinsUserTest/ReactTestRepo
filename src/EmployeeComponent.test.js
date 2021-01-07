import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeComponent from './EmployeeComponent';
import {render,screen} from '@testing-library/react';

it('test if component is correctly rendered',()=>{
 const div=document.createElement('div');
 ReactDOM.render(<EmployeeComponent/>,div);
});

it('check content of paragraph',()=>{
    render(<EmployeeComponent/>);
    expect(screen.getByText('Employee Information')).toBeInTheDocument();
})