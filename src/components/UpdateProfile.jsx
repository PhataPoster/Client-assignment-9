"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

export function UpdateProfile({ booking, updateAction }) {
    const userData = authClient.useSession()
    const user = userData?.data?.user;
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image,
        });
        router.push("/dashboard");

    }

    return (
        <Modal>
            <Button variant='outline' className='flex justify-center items-center gap-2'> <MdModeEdit />Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl h-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Update Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-3">
                            <Surface variant="default">
                                <Form className="flex flex-col gap-4" onSubmit={onSubmit} >
                                    <TextField
                                        isRequired
                                        name="name"
                                        type="text"
                                        defaultValue={user?.name}
                                        validate={(value) => {
                                            if (value.length < 2) {
                                                return "Name must be at least 2 characters";
                                            }
                                        }}
                                    >
                                        <Label>Name</Label>
                                        <Input placeholder="John Doe" />
                                        <FieldError />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        minLength={8}
                                        name="image"
                                        type="url"
                                        defaultValue={user?.image}
                                    >
                                        <Label>Image URL</Label>
                                        <Input placeholder="https://example.com/image.jpg" />
                                        <FieldError />
                                    </TextField>
                                    <div className="flex mt-6">
                                        <Button type="submit" className="w-full block">
                                            Update Information
                                        </Button>

                                    </div>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}