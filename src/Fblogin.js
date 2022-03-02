 
const backgroundstyle = {
    fontSize: 19,
     
};

 
const Fblogin = () =>{
    return(
        <div class="container" row >
            
            <div class="wrapper">
                <div class="row">
                    <div class="col-md-5">
                       <h3 className="text-primary">Facebook</h3>
                    </div>

                    <div class="col-md-2">
                        <input type="text" placeholder="Username" class="form-control"/>
                    </div>

                    <div class="col-md-2">
                        <input type="password" placeholder="Password" class="form-control"/>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                    <div class="col-md-2">
                         <p style={backgroundstyle}><a href="#">Forgotten account?</a></p>
                    </div>

                </div>

                 
		    </div>


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

            

            <div class="row">
                <div class="col-lg-12">
                    <p>English (UK) <a href="#" target="_blank" >Hausa </a> <a href="#" target="_blank" >Français (France)</a> 
                    <a href="#" target="_blank" >Português (Brasil)</a>, 
                    <a href="#">Español</a> <a href="#">العربية</a> <a href="#">Bahasa Indonesia</a><a href="#">Deutsch</a>
                    <a href="#">日本語</a><a href="#">Italiano</a><a href="#">हिन्दी</a><a href="#">Deutsch</a>
                </p>

                <a href="#">Sign Up</a> <a href="#">Log In</a> <a href="#">Messenger</a> <a href="#">Facebook Lite</a>
                <a href="#">Watch</a>  <a href="#">Places</a> <a href="#">Games</a> <a href="#">Marketplace</a> <a href="#">Facebook Pay</a>
                <a href="#">Oculus</a><a href="#">Portal</a><a href="#">Instagram</a><a href="#">Bulletin</a><a href="#">Local</a>
                <a href="#">Fundraisers</a><a href="#">Services</a><a href="#">Voting Information Centre</a><a href="#">Groups</a><a href="#">About</a>
                <a href="#">Create ad</a><a href="#">Create Page</a><a href="#">Developers</a><a href="#">Careers</a><a href="#">Privacy</a>
                <a href="#">Cookies</a><a href="#">AdChoices</a><a href="#">Terms</a><a href="#">Help</a> 
                </div>
             </div>

            <h6>Meta © 2022</h6>
    </div>
    )
}

export default Fblogin;