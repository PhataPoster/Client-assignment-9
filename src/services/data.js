export const fetchDoctorsData = async () =>{
    const res = await fetch(`${process.env.PUBLIC_API_URL}/doctors`);
    const data = await res.json();
    // console.log(data);
    return data;
}

export const fetchDoctorDetailsData = async (id) =>{
    const res = await fetch(`${process.env.PUBLIC_API_URL}/all-appointments/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
}
