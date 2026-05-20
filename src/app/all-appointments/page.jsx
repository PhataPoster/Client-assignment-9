import AllAppointmentHeader from "@/components/AllAppointmentHeader";
import DoctorCard from "@/components/DoctorCard";
import { fetchDoctorsData } from "@/services/data";
// import { Button } from "@heroui/react"
import { ClipboardList } from "lucide-react";
// import { BookOpen, Filter } from "lucide-react";

const AllAppointmentPage = async ({ searchParams }) => {
    // console.log(searchParams);
    const sParams = await searchParams;
    // console.log(sParams);


    const doctors = await fetchDoctorsData(sParams?.searchTerm || "");


    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <AllAppointmentHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <ClipboardList className="w-6 h-6 text-emerald-600" />
                        All Appointments
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        doctors?.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor} />
                        )
                    }
                </div>


            </main>
        </div>
    );
};

export default AllAppointmentPage;