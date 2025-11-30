import { FaCheckSquare } from "react-icons/fa";

const Hosting = () => {
    return (
        <div className="bg-[#F3F3FF] mb-12">
            <div className="container mx-auto flex items-center">
                <div className="space-y-2 md:w-6/12">
                    <h2 className="font-bold text-lg text-[#100B94]">Fastest Web Hosting</h2>
                    <h1 className="text-3xl font-bold">We Provide Secure Reliable Hosting For Every Website</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incid idunt ut labore.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaCheckSquare className="text-[#100B94]" />Free Domain Registration with Annual Plans</li>
                        <li className="flex items-center gap-2"><FaCheckSquare className="text-[#100B94]" />Optimized to run WordPress and WooCommerce</li>
                        <li className="flex items-center gap-2"><FaCheckSquare className="text-[#100B94]" />Free SSL Certificate, 1-Click Installer</li>
                        <li className="flex items-center gap-2"><FaCheckSquare className="text-[#100B94]" />Optimized to run WordPress and WooCommerce.</li>
                    </ul>
                </div>
                <img src="https://i.ibb.co.com/TD18tSbS/hosting.png" alt="" />
            </div>
        </div>
    );
};

export default Hosting;