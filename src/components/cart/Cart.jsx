/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({selectedCourse, totalCredit, totalRemaining, totalPrice}) => {
    
    
    return (
        <div className='bg-slate-300 p-4 rounded-md space-y-2'>
                    <h3 className='text-[#2F80ED] text-xl font-bold'>Credit Hour Remaining {totalRemaining} hr</h3>
                    <hr />
                    <h3 className='text-xl font-bold'>Course Name</h3>
           
            {
                selectedCourse.map(data => <div> 
                   
                    <p>{data.name}</p>
                   
                    </div>
                )
            }
                    <hr />
                    <p className='font-bold'>Total Credit Hour : {totalCredit} hr</p>
                    <hr />
                    <p className='font-bold'>Total Price : {totalPrice.toFixed(2)} USD</p>
        </div>
    );
};

export default Cart;


