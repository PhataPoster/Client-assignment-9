import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-emerald-50/40 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.3em] text-emerald-700">ERROR 404</p>
                        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-emerald-900">Page not found</h1>
                        <p className="mt-4 text-slate-600">
                            The page you are looking for does not exist or has been moved. Let us guide you back to a
                            healthy path.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20">
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Link>
                            <Link href="/all-appointments" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                                <ArrowLeft className="h-4 w-4" />
                                View Doctors
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-emerald-200/40 blur-2xl" />
                        <div className="absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-teal-200/40 blur-2xl" />
                        <div className="rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-xl">
                            <div className="text-7xl font-black text-emerald-500">404</div>
                            <p className="mt-4 text-slate-600">
                                Need help finding a doctor? Browse appointments and discover specialists.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-emerald-800">
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <p className="font-semibold">Trusted Care</p>
                                    <p className="mt-1 text-slate-600">Verified doctors</p>
                                </div>
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <p className="font-semibold">Fast Booking</p>
                                    <p className="mt-1 text-slate-600">Instant slots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;