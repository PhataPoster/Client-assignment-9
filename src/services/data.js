// import { headers } from "next/headers";

export const fetchDoctorsData = async (searchTerm = "") =>{
    const res = await fetch(`${process.env.PUBLIC_API_URL}/all-appointments?searchTerm=${searchTerm}`);
    const data = await res.json();
    // console.log(data);
    return data;
}

export const fetchDoctorDetailsData = async (id, token) =>{

    
    // console.log("token from fetchDoctorDetailsData", token);

    const res = await fetch(`${process.env.PUBLIC_API_URL}/all-appointments/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    // console.log(data);
    return data;
}

export const fetchAppointmentData = async (token) =>{
    // console.log("token from fetchAppointmentData", token);
    // const { token } = await auth.api.getToken({
    //     headers :await headers()
    // })
    // const res = await fetch(`${process.env.PUBLIC_API_URL}`);
    const res = await fetch(`${process.env.PUBLIC_API_URL}/bookings`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    // console.log(data);
    return Array.isArray(data) ? data : [];
}