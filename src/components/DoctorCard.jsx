import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
    // Fallback data if doctor is not provided
    const docData = doctor || {
        name: "Dr. Imran Hossain",
        specialty: "Neurologist",
        description: "Neurology consultant with expertise in stroke care, epilepsy management, and headache disorders.",
        location: "Panthpath, Dhaka",
        experience: "12 years experience",
        rating: 4.8,
        consultation: 1000,
        image: "https://images.unsplash.com/photo-1612349317150-e539c7ee0dbb?q=80&w=500&auto=format&fit=crop"
    };

    return (
        <div className="w-full  rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl shadow-emerald-100 hover:-translate-y-1">

            <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                    src={docData.image}
                    alt={docData.name}
                    layout="fill"
                    objectFit="cover"
                />

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-lg">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-slate-900">{docData.rating}</span>
                </div>
            </div>


            <div className="px-5 py-2 flex flex-col gap-4">

                <div>
                    <h3 className="text-xl font-bold text-slate-900">{docData.name}</h3>


                    <p className="mt-1 text-sm font-bold text-emerald-900 bg-emerald-100 shadow-emerald-400 w-fit mx-auto rounded-full py-0.5 px-3 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
                        {docData.specialty}
                    </p>


                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        {docData.description}
                    </p>
                </div>


                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 flex-shrink-0 text-teal-600" />
                        <span>{docData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="h-4 w-4 flex-shrink-0 text-teal-600" />
                        <span>{docData.experience}</span>
                    </div>
                </div>


                <div className="flex items-center justify-between border-t pt-2">
                    <div>
                        <p className="text-xs text-slate-500 font-medium">Consultation</p>
                        <p className="text-lg font-bold text-slate-900">৳{docData.fee}</p>
                    </div>
                    <Link href={`/all-appointments/${docData._id}`}>
                        <button className="rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-teal-700 hover:shadow-lg active:scale-95 cursor-pointer">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;