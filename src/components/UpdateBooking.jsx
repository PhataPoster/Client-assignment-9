"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdModeEdit } from "react-icons/md";

export function UpdateBooking({ booking, updateAction }) {

    const onSubmit = async (formData)=>{{
        'use server'
        await updateAction(formData, booking?._id)
    }}

    return (
        <Modal>
            <Button variant='outline' className='flex justify-center items-center gap-2'> <MdModeEdit />Update Booking</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl h-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Update Booking</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <Surface variant="default">
                                <form action = {onSubmit} className="flex flex-col gap-4">
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