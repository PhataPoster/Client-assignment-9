import React from 'react';
import DoctorCard from './DoctorCard';

const TopRatedDoc = ({ doctorsData }) => {
    const topRatedDoctors = [...doctorsData].sort((a, b) => b.rating - a.rating).slice(0,3);

    return (
        <div className='bg-emerald-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-center flex flex-col gap-4 py-12'>
            <h1 className='text-4xl font-bold '>Top Rated Doctors</h1>
            <p>Discover our top-rated doctors, trusted by patients for their <br />exceptional care and expertise. Book your appointment today!</p>
            <div className='mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                topRatedDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
                ))
            }
            </div>

        </div>
        </div>
    );
};

export default TopRatedDoc;