import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "./auth"
import { headers } from "next/headers"

export const createAppointment = async (appointmentData) => {
    'use server'
     const { token } = await auth.api.getToken({
            headers :await headers()
        })
    const res = await fetch(`${process.env.PUBLIC_API_URL}/appointments`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(appointmentData),
    })

    const data = await res.json()
    console.log("doctorId :", appointmentData.doctorId)
    console.log(data);
    if (data?.acknowledged) {
        revalidatePath(`/all-appointments/${appointmentData.doctorId}`)
    }
    
    return data;
}

export const deleteAppointment = async (id) => {
    'use server'
    const { token } = await auth.api.getToken({
        headers :await headers()
    })
    const res = await fetch(`${process.env.PUBLIC_API_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
    })
    const data = await res.json()
    console.log(data);
    if (data?.deletedCount) {
        revalidatePath(`/dashboard`)
        
    }

    return data;
}

export const updateAppointment = async (formData, id) =>{
    'use server'
    const { token } = await auth.api.getToken({
        headers :await headers()
    })
    const appointmentData = formData
    const res = await fetch(`${process.env.PUBLIC_API_URL}/bookings/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(appointmentData),
    })
    const data = await res.json()
    console.log(data);
    if (data?.modifiedCount > 0) {
        revalidatePath(`/dashboard`)
    }

    return data;
}
