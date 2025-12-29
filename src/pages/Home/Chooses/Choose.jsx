
const Choose = ({ choose,Icon }) => {
    const { title, short_description } = choose;
    
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <Icon className="text-4xl"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;