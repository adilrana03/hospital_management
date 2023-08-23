import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Blank from '../pages/Billing';
import Appointment from '../pages/Appointment';
import Dashboard from '../pages/Dashboard';
import Patient from '../pages/Patient';
import Billing from '../pages/Billing';
import Card from './Card';
import BillDetails from './BillDetails';


const AllRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div className='w-[15%] '>
                    <AppLayout />
                </div>
                <div className='w-[85%] ml-[16%] '>
                    <Routes>
                        <Route path='/' element={<AppLayout />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/patient' element={<Patient />} />
                        <Route path='/appointment' element={<Appointment />} />
                        <Route path='/billing' element={<Billing />} >
                            <Route  path='bill' element={<BillDetails />}/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AllRoutes