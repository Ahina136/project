import React from "react";

import {Link} from "react-router-dom";

function Home(){

    return(
        <div style={{justifyContent:"center"}} className="container">
            
            <div className="card-body"><br/>
            <h2 className="text-capitalize text-center text-danger mt-3 mb-5">Welcome to AJ jewellery Collections</h2>
                <div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./ring1.jpg" style={{height:"300px"}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rose Gold Ring</h5>
    <h6 class="card-price">16000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        
    <ul class="card-buy me-auto mb-2 mb-lg-0" type="none">
   <li class="card-item"> <Link to="/Buy" class="btn btn-primary">Buy Now</Link></li>
    </ul>
    
    
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./necklace1.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Thin Chain</h5>
    <h6 class="card-price">80000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul type="none">
   <li class="card-item"> <Link to="/Buy" class="btn btn-primary">Buy Now</Link></li>
    </ul>
    
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./bangle1.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Gold Bangle</h5>
    <h6 class="card-price">90000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./earring1.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">dimond earring</h5>
    <h6 class="card-price">18800 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
    
  </div>
</div>
    </div>
  </div>
</div><br/><br/>


<div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./bangle2.jpg" style={{height:"300px"}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">bangle</h5>
    <h6 class="card-price">90000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./necklace2.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Necklace</h5>
    <h6 class="card-price">131000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./earring2.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Earring</h5>
    <h6 class="card-price">36000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./ring2.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ring</h5>
    <h6 class="card-price">16000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
  </div>
</div><br/>


<div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./earring3.jpg" style={{height:"300px"}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Earring</h5>
    <h6 class="card-price">36000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./ring3.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ring</h5>
    <h6 class="card-price">16000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./bangle3.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bangle</h5>
    <h6 class="card-price">116000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./necklace3.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Necklace</h5>
    <h6 class="card-price">16000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
  </div>
</div><br/><br/>

<div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./ring4.jpg" style={{height:"300px"}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ring</h5>
    <h6 class="card-price">15000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./necklace4.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Necklace</h5>
    <h6 class="card-price">86000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./bangle4.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bangle</h5>
    <h6 class="card-price">76000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem;"}}>
  <img src="./earring4.jpg" style={{height:"300px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Earring</h5>
    <h6 class="card-price">56000 ISD</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
  </div>
</div>


                </div>
            </div>
       
        
    );

}
export default Home;