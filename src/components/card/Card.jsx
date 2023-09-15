/* eslint-disable react/prop-types */


const Card = ({data, handleButton}) => {

    const {img, name,description, price,duration} = data;
    return (
        <div className="card p-4 border rounded-xl text-center space-y-4">
            <figure>
                <img className="rounded-xl" src={img} alt="" />
            </figure>
            <div className="space-y-1">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>{description}</p>
            </div>
            <div className="flex gap-6 justify-center">
                <p><span className="font-bold">Price:</span> {price}</p>
                <p><span className="font-bold">Credit:</span> {duration} hr</p>
            </div>
            <button onClick={()=>handleButton(data)} className="btn bg-[#2F80ED] mt-3 text-white px-4 py-1 rounded-md my-3">Select</button>
        </div>
    );
};

export default Card;