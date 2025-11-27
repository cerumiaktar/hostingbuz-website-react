

const Hero = () => {
    return (
        <div>
            <div className="hero bg-linear-to-r from-[#100B94] to-[#F3345B] h-[500px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/21QWqGSb/hosting-1.png"
                        className="max-w-sm"
                    />
                    <div className="text-white">
                        <h1 className="text-5xl font-bold">High-Performance, Scalable Dedicated Hosting</h1>
                        <p className="py-6">
                            For plenty of power and room to grow, go Dedicated and get the whole box to yourself.
                        </p>
                        <div className="">
                            <button className="btn mr-4 dark:bg-white dark:text-black dark:border-none hover:bg-[#F3345B] hover:text-white">View Plan</button>
                            <button className="btn dark:bg-white dark:text-black dark:border-none hover:bg-[#F3345B] hover:text-white">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;