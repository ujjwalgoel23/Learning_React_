function Card(props){
    return (
       <div className="card" style={{border:"2px solid black",padding:"2px"}}>
        <img src="https://factori.com/assets/img/tshirt1.jpeg" height="200px" width="200px"/>
          <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h1>Shop Now</h1>
          </div>
       </div>
    )   
};

export default Card;