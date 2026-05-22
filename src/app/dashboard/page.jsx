import DashboardMain from '@/components/DashboardMain';
import { deleteAppointment, updateAppointment } from '@/lib/actions';
import { fetchAppointmentData } from '@/services/data';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import React from 'react';


const DashboardPage = async () => {
    const { token } = await auth.api.getToken({
        headers :await headers()
    })
    const bookings = await fetchAppointmentData(token);
    return (
        <div className='bg-emerald-50 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-stretch py-12' >
                <h1 className='text-4xl font-bold bg-linear-to-l from-emerald-400 to-emerald-700 bg-clip-text text-transparent text-center'>Dashboard</h1>
                <p className='text-lg text-gray-600 mt-4 mb-8 text-center'>Welcome to your dashboard!</p>
                <DashboardMain bookings={bookings} deleteActionAppointment={deleteAppointment} updateActionAppointment={updateAppointment} ></DashboardMain>
            </div>
        </div>
    );
};

export default DashboardPage;

export const metadata = {
    title: "Dashboard | DocAppoint",
    description: "Your dashboard – manage your bookings, update appointments, and view schedules.",
    openGraph: {
        title: "Dashboard | DocAppoint",
        description: "Manage bookings and appointments in your DocAppoint dashboard.",
        url: "https://client-doc-appointment.vercel.app/dashboard",
    },
};