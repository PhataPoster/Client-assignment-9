import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createAppointment = async (formData) => {
    'use server'
    const appointmentData = Object.fromEntries(formData.entries())
    const res = await fetch(`${process.env.PUBLIC_API_URL}/appointments`,{
        method: "POST",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(appointmentData),
    })

    const data = await res.json()
    console.log("doctorId :",appointmentData.doctorId)
    console.log(data);
    if(data?.acknowledged){
        revalidatePath(`/all-appointments/${appointmentData.doctorId}`)
        redirect(`/all-appointments/${appointmentData.doctorId}`)
    }
    
    return data;
}

