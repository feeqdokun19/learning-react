import Facebook from "./Facebook"

const Facebookheader = ()=> {
    return (
        <>

            <div class="container-fluid h-100 bg-light">
            <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                        <div class="card-body p-4 p-md-5 m-5 m-0 bg-white">
                <div class="row">
                <h1>Find Your Account</h1>
                <hr/>

                <p>Please enter your email address or mobile number to search for your account.</p>
            <div class="col-10-lg">
            <div>
                <div class="form-control">
                    <input type="text" id="form1" class="form-control" placeholder="Email address or phone number" autofocus="1"  aria-label="Email address or mobile number" />
                   
                 </div>
                 <hr />    
            </div>
           
            </div>
            <div class="col-2-lg">
                     
                        <button class="btn btn-default">Cancel</button> &nbsp;
                        <button class="btn btn-primary">Submit</button>
                     
                 </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Facebookheader;
