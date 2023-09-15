import { useEffect, useState } from "react";
import Card from "../card/Card";
import Cart from "../cart/Cart";


const Home = () => {
    const [allData, setAllData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(20);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect( () => {
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    }, [])
  
   const handleButton = (data) => {
    setSelectedCourse([...selectedCourse, data])

    const credit = totalCredit + data.duration;
    setTotalCredit(credit)

    const remaining = totalRemaining - totalCredit;
    setTotalRemaining(remaining)

    const price = totalPrice + data.price;
    setTotalPrice(price)

   }
console.log(totalCredit)
    return (
        <>
        <div className="md:flex gap-4 max-w-screen-xl mx-auto px-8 py-8">
        <div className="card-container grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3">
            {
                allData.map((data, inx) => 
                <Card 
                key={inx} 
                data={data}
                handleButton={handleButton}
                ></Card>)
            }
        </div>
        <div className="cart-container my-4 md:my-0 w-1/3 space-y-2">
           <Cart 
           selectedCourse={selectedCourse}
           totalCredit={totalCredit}
           totalRemaining={totalRemaining}
           totalPrice={totalPrice}
           ></Cart>
        </div>
        </div>
        </>
    );
};

export default Home;