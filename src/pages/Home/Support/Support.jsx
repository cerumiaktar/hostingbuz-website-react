import { GrCluster } from "react-icons/gr";

const Support = () => {
    return (
        <div className="bg-[#F3F3FF] py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card  bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <GrCluster />
                            <h2 className="card-title">IP Transit / Connectivity</h2>
                            <p>Lorem ipsum dolor amet consecteturincididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <GrCluster className="text-4xl" />
                            <h2 className="card-title">Monitoring</h2>
                            <p>Risus commodo viverra maecena editaccumsan lacus vel facilisis.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <GrCluster />
                            <h2 className="card-title">24x7 Support</h2>
                            <p>Duis aute irure dolor in reprehenderitdolore nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;