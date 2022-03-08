import Facebook from "./Facebook"

const Facebookheader = ()=> {
    return (
        <>
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
        </>
    )
}

          

export default Facebookheader;
