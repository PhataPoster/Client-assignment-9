import { BookAppointmentForm } from '@/components/BookAppointmentForm';
import { createAppointment } from '@/lib/actions';
import { auth } from '@/lib/auth';
import { fetchDoctorDetailsData } from '@/services/data';
import { Button } from '@heroui/react';
import { MapPin, Clock, Star, Hospital, HandCoins, HandCoinsIcon } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params
    const { token } = await auth.api.getToken({
        headers :await headers()
    })
    // console.log(id);
    const doctorDetailsData = await fetchDoctorDetailsData(id, token);
    // console.log(id);
    return (
        <div className='bg-emerald-50 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-14 justify-center items-center'>
                <div className='flex flex-col gap-2 items-center text-center md:text-left bg-white rounded-2xl overflow-hidden w-full md:w-80'>
                    <div className="relative w-full h-72 sm:h-80 bg-slate-100">
                        <Image
                            src={doctorDetailsData?.image}
                            alt={doctorDetailsData?.name}
                            fill
                            className="object-cover w-full h-full"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                        />
                    </div>
                    <div className='p-2'>
                        <h3 className="text-xl font-bold text-slate-900">{doctorDetailsData?.name}</h3>


                        <p className="mt-1 text-sm font-bold text-emerald-900 bg-emerald-100 shadow-emerald-400 w-fit mx-auto rounded-full py-0.5 px-3 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                            {doctorDetailsData?.specialty}
                        </p>
                        <div className='flex gap-1'>
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-slate-900">{doctorDetailsData?.rating}</span>
                        </div>
                        <p className='text-lg font-bold text-emerald-600 mt-2'>MBBS, M.D of Medicine</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold border-b-4 border-emerald-500 w-fit rounded-lg pb-2 '>About Me:</h1>
                    <p className='font-semibold'>{doctorDetailsData?.description}</p>

                    <h1 className='text-2xl font-bold border-b-4 border-emerald-500 w-fit rounded-lg pb-2'>Personal Information:</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='bg-white border-2 border-emerald-500 p-3 rounded-2xl shadow-xl mt-4'>
                            <p className='text-sm text-gray-500 '>Location</p>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <div className='p-2 bg-emerald-50 border border-emerald-500 rounded-xl shadow-2xl shadow-emerald-200'>
                                    <MapPin className="h-4 w-4 shrink-0 text-teal-600" />
                                </div>
                                <span>{doctorDetailsData.location}</span>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-emerald-500 p-3 rounded-2xl shadow-xl mt-4'>
                            <p className='text-sm text-gray-500 '>Experience</p>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <div className='p-2 bg-emerald-50 border border-emerald-500 rounded-xl shadow-2xl shadow-emerald-200'>
                                    <Clock className="h-4 w-4 shrink-0 text-teal-600" />
                                </div>
                                <span>{doctorDetailsData.experience}</span>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-emerald-500 p-3 rounded-2xl shadow-xl mt-4'>
                            <p className='text-sm text-gray-500 '>Hospital</p>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <div className='p-2 bg-emerald-50 border border-emerald-500 rounded-xl shadow-2xl shadow-emerald-200'>
                                    <Hospital className="h-4 w-4 shrink-0 text-teal-600" />
                                </div>
                                <span>{doctorDetailsData.hospital}</span>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-emerald-500 p-3 rounded-2xl shadow-xl mt-4'>
                            <p className='text-sm text-gray-500 '>Consultation Fee</p>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <div className='p-2 bg-emerald-50 border border-emerald-500 rounded-xl shadow-2xl shadow-emerald-200'>
                                    <HandCoins className="h-4 w-4 shrink-0 text-teal-600" />
                                </div>
                                <span>{doctorDetailsData.fee}</span>
                            </div>
                        </div>
                    </div>
                        <h1 className='text-2xl font-bold border-b-4 border-emerald-500 w-fit rounded-lg pb-2 mt-6'>Available Time Slots:</h1>
                    <div className='flex gap-x-2'>
                        {
                            doctorDetailsData?.availability.map((slot, index) => (
                                <div key={index} className='bg-emerald-50 border border-emerald-500 rounded-lg p-1 mt-4 shadow-md shadow-emerald-200 text-sm font-semibold'>
                                    {slot}
                                </div>
                            ))
                        }
                    </div>
                    <BookAppointmentForm doctorDetailsData={doctorDetailsData} createAppointmentAction = {createAppointment} />
                </div>

            </div>
        </div>
    );
};

export default DoctorDetailsPage;

export const metadata = {
    title: "Doctor Details | DocAppoint",
    description: "View doctor profile, biography, and available time slots. Book an appointment directly from the profile.",
    openGraph: {
        title: "Doctor Details | DocAppoint",
        description: "View doctor profile and book appointments.",
        url: "https://client-doc-appointment.vercel.app/all-appointments",
    },
};