import { FaCheckCircle } from "react-icons/fa";

const DomainSection = () => {
    return (
        <div className="container mx-auto mt-12 mb-12 bg-white shadow-2xl border border-[#100B9466] rounded-xl p-12">
            <div className="space-y-6">
                <h1 className="text-2xl text-center">Search Your Domain Name</h1>
                <div className="flex items-center gap-6 justify-center">
                    <div className="flex items-center gap-2">
                        <span className="text-green-600"><FaCheckCircle /></span>
                        <h2>Free DNS Management</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600"><FaCheckCircle /></span>
                        <h2>Free Privacy Protection</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600"><FaCheckCircle /></span>
                        <h2>Domain Theft Protection</h2>
                    </div>
                </div>
                <div className="">
                    <div className="join w-full justify-center">
                        <div className="w-6/12">
                            <label className="input validator join-item w-full">
                                <input type="email" placeholder="domain.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid domain name</div>
                        </div>
                        <button className="btn bg-[#100B94] text-white join-item">Search</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="card card-border  bg-base-100 w-96 shadow-xl border-[#100B9466]">
                        <div className="card-body text-center"> 
                            <p className="font-bold text-[#F3345B]">.com</p>
                            <h2 className="card-title text-2xl font-bold mx-auto">TK 1550</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96 shadow-xl border-[#100B9466]">
                        <div className="card-body text-center"> 
                            <p className="font-bold text-[#F3345B]">.net</p>
                            <h2 className="card-title text-2xl font-bold mx-auto">TK 1200</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96 shadow-xl border-[#100B9466]">
                        <div className="card-body text-center"> 
                            <p className="font-bold text-[#F3345B]">.org</p>
                            <h2 className="card-title text-2xl font-bold mx-auto">TK 1000</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96 shadow-xl border-[#100B9466]">
                        <div className="card-body text-center"> 
                            <p className="font-bold text-[#F3345B]">.info</p>
                            <h2 className="card-title text-2xl font-bold mx-auto">TK 500</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96 shadow-xl border-[#100B9466]">
                        <div className="card-body text-center"> 
                            <p className="font-bold text-[#F3345B]">.com.bd</p>
                            <h2 className="card-title text-2xl font-bold mx-auto">TK 2400 2/yr</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainSection;