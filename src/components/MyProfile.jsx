"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { UpdateProfile } from './UpdateProfile';

const MyProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData?.data?.user;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl border bg-white/80 p-6 flex flex-col items-center gap-4">
            <Avatar className='h-35 w-40'>
                <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer" />
                <Avatar.Fallback className="h-20 w-20">{user?.name[0] ? user?.name[0] : <IoPerson className='h-15 w-15' />}</Avatar.Fallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <UpdateProfile />
        </div>
    );
};

export default MyProfilePage;