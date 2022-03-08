const Transaction = ({name,amount}) => {

//   const datas = props.transactiondata
    return(
        <div className="container border border-danger pt-3">
            <div className="row">
                <div className="col-md-4 border border-success bg-gray">
                    <div className="card-body bg-dark border-right-4 rounded-top rounded-right rounded-left rounded-bottom">
                            <h5 className="card-title text-white-50">Total saved</h5>
                            <p className="card-text text-white">#23,500</p>
                    </div>
                    <div className="row bg-white">
                        <div className="card-body bg-white">
                            <h5 className="card-title">Transaction history</h5>
                            <label className="text-muted">2022-03-03</label> 
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col"><img src="http://www.w3.org/2000/svg" alt=""/> {name}</th>
                                    <th scope="col">{amount}</th>
                                </tr>
                            </thead>
                        </table>


                    </div>
                </div>

                <div className="col-md-8 border border-success bg-light">
                    <div className="row">
                        <div className="col-md-6 border border-default bg-white p-4">
                        <div className="card border-success mb-2 mt-3 bg-white border-2">
                                    <div className="card-header bg-transparent border-default">
                                        <div className="card-body bg-transparent">
                                            <center><img src="http://www.w3.org/2000/svg" alt=""/></center>
                                            <div className="card-body text-success">
                                                <h5 className="card-title text-nowrap"><center>Create new savings</center></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-6 border border-default bg-white p-4" >
                            <div className="row">
                                <div className="col-8 border-success mb-2 mt-0">
                                 <div className="row">
                                    <div className="col-sm-2 bg-warning border-success py-1  px-2 mb-0 mt-0"><span className="bi bi-lock h-50"></span></div>
                                    <div className="col-sm-2"><h5>Test2</h5></div>
                                </div>
                                <div className="progress mt-1">
                                    <div className="progress-bar w-100 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> </div>
                                </div> 
                                <div className="row">      
                                    <div className="col-md-9">0%</div>
                                    <div className="col-md-3">#50</div>
                                </div>
                                         
                                            <span className="badge bg-success">Pending</span>
                                </div>
                                <div className="col-4 bg-warning border-success px-1 mb-2 mt-2"><span className="bi bi-lock h-50"></span></div>
                            </div>

                            <div className="card border-default mb-3 mt-3">
                                    <div className="card-body text-success">
                                        <div className="row">
                                            <div className="col-6 border border-default">

                                            </div>
                                            <div className="col-6 border border-default">

                                            </div>
                                                 <thead>
                                                    <tr>
                                                    <th>Total saved</th>
                                                    <th>InterestRate</th>
                                                    </tr>

                                                    <tr>
                                                    <th>Start Date </th>
                                                    <th>Maturity Date</th>
                                                    </tr>
                                                </thead>
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
export default Transaction;