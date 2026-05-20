"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, ListBox, Modal, Surface, TextField, Select } from "@heroui/react";

export function BookAppointmentForm({ doctorDetailsData }) {
    return (
        <Modal>
            <Button className=" rounded-full bg-linear-to-r from-emerald-500 to-teal-500 font-semibold text-white mt-2">
                Book Appointment
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl h-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Book Appointment</Modal.Heading>
                            <p className="text-sm text-gray-500">with {doctorDetailsData.name}</p>
                        </Modal.Header>
                        <Modal.Body className="">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="email" type="email" variant="secondary">
                                        <Label>User Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="doctor" type="text" variant="secondary" defaultValue={doctorDetailsData.name} disabled>
                                        <Label>Doctor Name</Label>
                                        <Input placeholder="Enter doctor's name" />
                                    </TextField>
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Patient Name</Label>
                                        <Input placeholder="Enter patient name" />
                                    </TextField>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Select className="w-[256px]" placeholder="Select one">
                                            <Label>Gender</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>

                                                    <ListBox.Item id="texas" textValue="Texas">
                                                        Select Gender
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="new-york" textValue="New York">
                                                        Male
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="washington" textValue="Washington">
                                                        Female
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                        <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter your phone number" />
                                        </TextField>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">

                                        <TextField name="date" variant="secondary">
                                            <Label>Date</Label>
                                            <Input type="date" />
                                        </TextField>

                                        <TextField name="time" variant="secondary">
                                            <Label>Time</Label>
                                            <Input type="time" />
                                        </TextField>

                                    </div>
                                    <TextField className="w-full" name="message" variant="secondary">
                                        <Label>Reason(Optional)</Label>
                                        <Input placeholder="Brief description for the appointment" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button className=" rounded-full bg-linear-to-r from-emerald-500 to-teal-500 font-semibold text-white mt-2 w-full" type="submit">
                                            Confirm Booking
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