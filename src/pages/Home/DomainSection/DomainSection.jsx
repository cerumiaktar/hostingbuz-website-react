import { FaCheckCircle } from "react-icons/fa";

const DomainSection = () => {
    return (
        <div className="container mx-auto mt-12 mb-12 bg-white shadow-2xl border p-4">
            <div>
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
                        <button className="btn btn-neutral join-item">Search</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="card card-border bg-base-100 w-96 shadow-xl">
                        <div className="card-body"> 
                            <p>.com</p>
                            <h2 className="card-title">Card Title</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96">
                        <div className="card-body"> 
                            <p>.com</p>
                            <h2 className="card-title">Card Title</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96">
                        <div className="card-body"> 
                            <p>.com</p>
                            <h2 className="card-title">Card Title</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96">
                        <div className="card-body"> 
                            <p>.com</p>
                            <h2 className="card-title">Card Title</h2>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-96">
                        <div className="card-body"> 
                            <p>.com</p>
                            <h2 className="card-title">Card Title</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainSection;