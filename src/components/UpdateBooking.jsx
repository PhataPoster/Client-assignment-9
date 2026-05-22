"use client";

import { useState } from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";

export function UpdateBooking({ booking, updateAction }) {
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const appointmentData = Object.fromEntries(formData.entries());

        try {
            const result = await updateAction(appointmentData, booking?._id);
            if (result) {
                toast.success("Booking updated");
                setIsOpen(false);
            } else {
                toast.error("Update failed. Please try again.");
            }
        } catch (error) {
            toast.error("Update failed. Please try again.");
        }
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button variant='outline' className='flex justify-center items-center gap-2'> <MdModeEdit />Update Booking</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className=" max-w-3/4 sm:max-w-xl h-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Update Booking</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="doctor" type="text" variant="secondary" defaultValue={booking?.doctor} disabled>
                                        <Label>Doctor Name</Label>
                                        <Input placeholder="Enter doctor's name" />
                                    </TextField>
                                    <TextField className="w-full" name="name" type="text" variant="secondary" defaultValue={booking?.name}>
                                        <Label>Patient Name</Label>
                                        <Input placeholder="Enter patient name" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel" variant="secondary" defaultValue={booking?.phone}>
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="date" variant="secondary" defaultValue={booking?.date}>
                                        <Label>Date</Label>
                                        <Input type="date" />
                                    </TextField>
                                    <TextField className="w-full" name="time" variant="secondary" defaultValue={booking?.time}>
                                        <Label>Time</Label>
                                        <Input type="time" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button className=" rounded-full bg-linear-to-r from-emerald-500 to-teal-500 font-semibold text-white mt-2 w-full" type="submit">
                                            Confirm Update
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}