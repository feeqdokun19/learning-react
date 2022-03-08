import { useState } from "react"

const Product = (props) => {
    console.log("here: ",props.product_data)

    // const calc = () => {
    //     let [counter, setcounter] = useState("")
    //     let [amount, setamount] = useState(3000)

    //     function addition(){
    //        setcounter(counter +1)
    //     }
    //     function minusone(){
    //         setcounter(counter -1)
    //     }

    // }

    // const newuser = () => {
    //     let [firstname, setfirstname] = useState("")
    //     let [lastname, setlastname] = useState("")

    //     function changeName (){
    //         setfirstname(firstname)
    //         setlastname(lastname)
    //     }

    //     function onFormSubmit(e){
    //         e.preventSubmit
    //     }
    // }


    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Features for this product
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">thiis product id is {props.product_data.id}</li>
                        <li className="list-group-item">Product type is {props.product_data.type}</li>
                        <li className="list-group-item">Product name is {props.product_data.name}</li>
                    <li className="list-group-item">and price for this product is {props.product_data.price}</li>
                </ul>
            </div>
        </div> 
    )
}

export default Product;