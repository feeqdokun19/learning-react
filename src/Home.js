 
 
    const Home = () => {
      
  
        return (
            
                <div class="container-fluid">
                <div class="page-header mt-1 mb-1 ml-1 ">
                    <center>  <h1>DISEASE PREDICTION SYSTEM</h1>   
                          <h6>You can be your own semi doctor </h6>
                    </center>
                </div>

                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card-body p-4 p-md-5">
                                <center>
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Create a new account</h3>
                                    <h6>It's quick and easy. </h6>
                                </center>
                                
                                <form>

                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="firstName" class="form-control form-control-lg" placeholder="firstName" />
                                         </div>

                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <div class="form-outline">
                                            <input type="text" id="lastName" class="form-control form-control-lg" placeholder="firstName"/>
                                         </div>

                                    </div>
                                </div>

                            <div class="row">
                                <div class="col-md-12 mb-4 d-flex align-items-center">

                                    <div class="form-outline datepicker w-100">
                                        <input type="text" class="form-control form-control-lg" id="emailorphone" placeholder="Mobile Number or email address" />
                                     </div>

                                </div>
                     
                            </div>

                            <div class="row">
                                <div class="col-md-12 mb-4 pb-2">

                                    <div class="form-outline">
                                    <input type="password" id="password" class="form-control form-control-lg" placeholder="New password" />
                                    </div>

                                </div>
                            
                            </div>

                        <div class="row">
                            <h5>Date of birth</h5>
                        <div class="col-4">

                            <select class="select form-control-lg">
                            <option>Date</option>
                             
                            </select>
 
                        </div>

                        <div class="col-4">

                            <select class="select form-control-lg">
                            <option>Month</option>
                            </select>
 
                        </div>

                        <div class="col-4">

                            <select class="select form-control-lg">
                            <option onClick="year();">Year</option>
                            </select>
 
                        </div>
                        </div>

                        <div class="row">
                            <h5>Gender</h5>
                        <div class="col-4">
                             
                        <span class="_5k_2 _5dba"><label class="_58mt" for="u_0_4_QQ">Female</label>
                        <input type="radio" class="_8esa" name="gender" value="1" id="u_0_4_QQ"/></span>
 
                        </div>

                        <div class="col-4">

                                <span class="_5k_2 _5dba"><label class="_58mt" for="u_0_5_Xq">Male</label>
                                    <input type="radio" class="_8esa" name="sex" value="2" id="u_0_5_Xq"/>
                                </span>
 
                        </div>

                        <div class="col-4">
                            <span class="_5k_2 _5dba"><label class="_58mt" for="u_0_6_7s">Custom</label>
                                <input type="radio" class="_8esa" name="sex" value="-1" id="u_0_6_7s"/>
                            </span>
                        </div>
                        </div>

                        <p>
                        By clicking Sign Up, you agree to our <a href="#" target="_blank" >Terms</a>, <a href="#" target="_blank">Data Policy</a> and <a href="#" target="_blank">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                        </p>

 
<div class="mt-4 pt-2">
  <input class="btn btn-success btn-lg" type="submit" value="Submit" />
</div>
<div class="row">

<div class="col-8-md"><a href="#">Already have an account?</a></div>

</div>
</form>
                            </div>   
                        </div> 
                    </div>

<div class="container-fluid">
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">

        </div>
    </div>
</div>

                </div>

                
     
                
            </div>
            )

    
}

export default Home;