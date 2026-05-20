"use client";
import { Button } from '@heroui/react';
import { useState } from 'react';
import MyBooking from './MyBooking';
import MyProfile from './MyProfile';


const DashboardMain = ({ bookings, deleteActionAppointment, updateActionAppointment }) => {

    const [active, setActive] = useState(true);

    return (
        <div className=''>
            <div className="items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-2 py-1 md:flex w-fit mx-auto">
                <button onClick={() => setActive(true)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                        : "text-emerald-800  bg-emerald-100 hover:text-emerald-950"
                    }`} >My Bookings</button>
                <button onClick={() => setActive(false)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active
                        ? "text-emerald-800 bg-emerald-100 hover:text-emerald-950"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                    }`}>My Profile</button>
            </div>
            <div className='mt-7'>
                {
                    active ? <MyBooking bookings={bookings} deleteAction={deleteActionAppointment} updateAction={updateActionAppointment} /> : <MyProfile />
                }
            </div>
        </div>
    );
};

export default DashboardMain;