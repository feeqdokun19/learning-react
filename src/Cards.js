 


const Cards = () => {
   
    return(
        <div className="container">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{Load.id}</li>
                    <li class="list-group-item">{load.type}</li>
                    <li class="list-group-item">{load.name}</li>
                    <li class="list-group-item">{load.price}</li>
                </ul>
            </div>
        </div>
        
    )
    
}

export default Cards;


 