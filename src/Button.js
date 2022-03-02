const Button = (props) => {

    const  {name} = props
   
    function loginAction() {
        alert ("Alaaye, Are you sure you want to submit?");
      }

    return(
        <button type="submit" class="btn btn-primary" onClick={loginAction} >{name}</button>
    )
}


export default Button;
