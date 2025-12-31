import { BsDatabaseFillLock } from "react-icons/bs";

const DataCenter = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-6/12 ">
                    <img src="https://i.ibb.co.com/S4z4BX6H/image-2.png" alt="" />
                </div>
                <div className="md:w-6/12 ">
                    <div className="mb-6 space-y-2">
                        <h4 className="font-bold text-[#F3345B]">Global Datacenters</h4>
                        <h1 className="text-2xl font-bold">Powerful Severs, High Speed Datacenter Connectivity</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incid idunt ut labore.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-[#F3F3FF] p-4 rounded-lg">
                            <BsDatabaseFillLock className="text-2xl text-[#100B94]" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold ">Global Datacenters</h1>
                            <p className="text-[#333333]">Lorem ipsum dolor sit amet consecteturadipis labore dolore magna aliqua</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCenter;