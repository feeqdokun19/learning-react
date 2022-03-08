import React from "react"
import { useState } from "react"

const Welcome = () =>{

            let [firstName, setfirstname] = useState("")
            let [surName, setsurName] = useState("")

            
        // const greetStaff=() =>{
        //     // let greetStaff = firstName+surName
        //         alert(`Hello ${firstName} ${surName}`)
        //     }

        const handleGreet =(e) =>{
            e.preventDefault(`You cannot submit ${firstName} ${surName}is required`)
            alert(`Hello ${firstName} ${surName}`)
        }
            



return(
    <div className="container">
        <div className="row mt-5 border border-success">
            <div className="col-md-3">
                <div className="row mt-5">
                    <div className="col-2">
                        <button className="">-</button>
                    </div>
                    <div className="col-8">
                        <h3>Buy&Sell</h3>
                    </div>
                    <div className="col-2">
                    <button className="">+</button>   
                    </div>
                </div>
            </div>



            <div className="col-6 w-full max-w-xs">
                <h2>Greet me Assessment</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-3">
                   <input type="text" onChange={(e) => setfirstname (e.target.value)}  class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-3">
                    <input type="text" onChange={(e) => setsurName (e.target.value)} class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div className="row mt-5 border border-success bg-warning">
                    <div className="col-md-8 flex md:items-center">
                            <label className="md:w-2/3 block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox"/>
                                <span className="text-sm">Check to receive our newsletter!</span>
                            </label>
                    </div>

                    <div className="col-md-4 flex md:items-center">
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <a href="#" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Forgot Password?
                            </a>
                        </label>
                </div>

                    <div class="flex items-center justify-between">
                    <button type="submit" onClick={handleGreet} class="btn btn-danger hover:bg-blue-700">Submit</button>
                        
                    </div>

                </div>
               
                
                <div class="w-full max-w-xs">
                    <p class="text-center text-gray-500 text-xs">
                    &copy;2022 Feeq Corp. All rights reserved for you guys.</p>
                </div>

            </form>
            </div>







        </div>
    </div>
)

    
}

export default Welcome;