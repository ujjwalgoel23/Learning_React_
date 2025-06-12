function Header(){
  return (
    <div className="heading">
      <img className="images " src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" height="80px" width="80px"/>
      <div className="option">
        <button className="button">Men</button>
        <button className="button">women</button>
        <button className="button">kids</button>
        <button className="button">home and living</button>
        <button className="button">beauty</button>
        <button className="button">studio</button>
      </div>
      <input className="searchbar" placeholder="search for products brands and more"></input>
     <div className="profile"> 
      <button className="pro">Profile</button>
      <button className="pro">wishlist</button>
      <button className="pro">Bag</button>
     </div>
    </div>
  )
}
export default Header;
//export krane ka ek or tarika hai ki hm function aase aase like=>
//    export default Function Header(){

//     }
