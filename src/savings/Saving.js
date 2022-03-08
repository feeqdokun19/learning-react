const Saving = (props) => {
     
    return(
        <div className="container">
            <div className="row" >
                
                <div className="col-md-7">
                    <div className="row">
                         
                            <div className="col-md-6">
                                <div className="card border-success mb-3 mt-3 bg-white border-2">
                                    <div className="card-header bg-transparent border-default">
                                        <div className="card-body bg-transparent h-20 bg-light">
                                            <div className="card-body text-success">
                                                <h5 className="card-title">Create new savings Type</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                
                            <div className="card border-success mb-3 mt-3">
                                <div className="card-header bg-transparent border-success">{props.list_SavingsData.name}</div>
                                    <div className="card-body text-success">
                                        <button className="btn btn-success">Pending</button>
                                        <div className="row">

                                        <table className="table border border-default">
                                        <thead>
                                            <tr>
                                            <th scope="col">Total Saved</th>
                                            <th scope="col">interestRate</th>
                                            </tr>

                                            <tr>
                                            <th scope="col">Start Date </th>
                                            <th scope="col">Maturity Date</th>
                                            </tr>
                                        </thead>
                                             
                                    </table>


                                        </div>
       
                                    </div>
                            </div>
                            </div>
                         
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Saving;