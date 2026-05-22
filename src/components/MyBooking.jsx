"use client";
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { IoPersonCircleSharp, IoTimeSharp } from 'react-icons/io5';
import { MdDateRange, MdDelete, MdModeEdit, MdPhoneInTalk } from 'react-icons/md';
import { UpdateBooking } from './UpdateBooking';
import { toast } from "react-toastify";

const MyBooking = ({ bookings, deleteAction, updateAction }) => {
    // const bookings = await fetchAppointmentData();
    const handleDelete = async (id) => {
        try {
            const result = await deleteAction(id);
            if (result?.deletedCount > 0) {
                toast.success("Booking canceled");
            } else {
                toast.error("Cancel failed. Please try again.");
            }
        } catch (error) {
            toast.error("Cancel failed. Please try again.");
        }
    }
    if (!Array.isArray(bookings) || bookings.length === 0) {
        return (
            <div className='w-full flex flex-col justify-center items-center gap-4 bg-white rounded-2xl shadow-md p-8'>
                <p className='text-center text-emerald-600 font-semibold text-lg'>No Bookings Found</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-4 w-full'>
            {bookings.map((booking) => (
                <div key={booking?._id} className='w-full flex flex-col sm:flex-row gap-4 justify-between bg-white rounded-2xl shadow-md p-8 items-center'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-xl font-semibold text-emerald-600'>Doctor: {booking?.doctor}</h3>
                        <p className='flex items-center gap-2 mt-2'><IoPersonCircleSharp /> Patient: {booking?.name}</p>
                        <p className='flex items-center gap-2'><MdPhoneInTalk /> Phone: {booking?.phone}</p>
                        <p className='flex items-center gap-2'><MdDateRange /> Date: {booking?.date}</p>
                        <p className='flex items-center gap-2'><IoTimeSharp /> Time: {booking?.time}</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <AlertDialog>
                            <Button variant='danger' className='flex justify-center items-center gap-2'><MdDelete /> Cancel Booking</Button>
                            <AlertDialog.Backdrop>
                                <AlertDialog.Container>
                                    <AlertDialog.Dialog className="sm:max-w-100">
                                        <AlertDialog.CloseTrigger />
                                        <AlertDialog.Header>
                                            <AlertDialog.Icon status="danger" />
                                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                                        </AlertDialog.Header>
                                        <AlertDialog.Body>
                                            <p>
                                                This will permanently delete Booking
                                            </p>
                                        </AlertDialog.Body>
                                        <AlertDialog.Footer>
                                            <Button slot="close" variant="tertiary">
                                                Cancel
                                            </Button>
                                            <Button onClick={() => handleDelete(booking?._id)} slot="close" variant="danger" >
                                                Confirm Delete
                                            </Button>
                                        </AlertDialog.Footer>
                                    </AlertDialog.Dialog>
                                </AlertDialog.Container>
                            </AlertDialog.Backdrop>
                        </AlertDialog>

                        <UpdateBooking booking={booking} updateAction={updateAction} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyBooking;