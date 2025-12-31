import { BsDatabaseFillLock } from "react-icons/bs";
import { FaFileCode } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const DataCenter = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-6/12 ">
                    <img src="https://i.ibb.co.com/S4z4BX6H/image-2.png" alt="" />
                </div>
                <div className="md:w-6/12 ">
                    <div className="mb-6 space-y-2">
                        <h4 className="font-bold text-[#F3345B]">Global Datacenters</h4>
                        <h1 className="text-2xl font-bold">Powerful Severs, High Speed Datacenter Connectivity</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incid idunt ut labore.</p>
                    </div>
                    <div className="flex gap-3 mb-6">
                        <div className="bg-[#F3F3FF] p-4 rounded-lg">
                            <BsDatabaseFillLock className="text-2xl text-[#100B94]" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold ">Global Datacenters</h1>
                            <p className="text-[#333333]">Lorem ipsum dolor sit amet consecteturadipis labore dolore magna aliqua</p>
                        </div>

                    </div>
                    <div className="flex gap-3 mb-6">
                        <div className="bg-[#F3F3FF] p-4 rounded-lg">
                            <FaFileCode className="text-2xl text-[#100B94]" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold ">Facility Security</h1>
                            <p className="text-[#333333]">Lorem ipsum dolor sit amet consecteturadipis labore dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="py-3 px-4 rounded-md mx-4 bg-[#100B94] text-white text-xl font-medium">Contact Us</button>
                        <div className="flex gap-2">
                            <div className="bg-[#100B94] p-4 rounded-lg">
                                <MdCall className="text-2xl text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Any Query</h2>
                                <p className="font-medium">++8801844-910755</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCenter;