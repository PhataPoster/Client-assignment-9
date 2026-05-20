
import SearchBar from "./SearchBar";

const AllAppointmentHeader = () => {

    return (
        <header className="bg-white border-b border-slate-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    Explore Our{' '}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-emerald-800">Qualified</span>{' '}
                    doctor
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Find the best doctors in your area and book appointments with ease. Your health is our priority.
                </p>

                <div className="max-w-2xl mx-auto pt-4">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};

export default AllAppointmentHeader;