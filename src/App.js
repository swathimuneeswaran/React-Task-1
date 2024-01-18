import logo from "./logo.svg";
import './style.css'
import "./App.css";
import Card from "./Card.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <div className="container">
      <div className="row">
      <Card name="Free" name1="$0/month" 
       n={<p><i className="fas fa-check"></i> Single User<br />
       <i className="fas fa-check"></i>  50GB Storage<br />
       <i className="fas fa-check"></i>  Unlimited Public Projects<br />
       <i className="fas fa-check"></i>  Community Access<br />
       <i className="fa-solid fa-xmark"></i>   Unlimited Private Projects<br />
       <i className="fa-solid fa-xmark"></i>   Dedicated Phone Support<br />
       <i className="fa-solid fa-xmark"></i>   Free Subdomain<br />
       <i className="fa-solid fa-xmark"></i>   Monthly Status Reports<br />
       </p>}>
       </Card>
      <Card name="Plus" name1="$9/month"
        n={<p><i className="fas fa-check"></i> Single User<br />
        <i className="fas fa-check"></i>  50GB Storage<br />
        <i className="fas fa-check"></i>  Unlimited Public Projects<br />
        <i className="fas fa-check"></i>  Community Access<br />
        <i className="fas fa-check"></i>    Unlimited Private Projects<br />
        <i className="fas fa-check"></i>   Dedicated Phone Support<br />
        <i className="fas fa-check"></i>   Free Subdomain<br />
        <i className="fa-solid fa-xmark"></i>   Monthly Status Reports<br />
        </p>}>
      </Card>
      <Card name="Pro" name1="$49/month"  
        n={<p><i className="fas fa-check"></i> Single User<br />
        <i className="fas fa-check"></i>  50GB Storage<br />
        <i className="fas fa-check"></i>  Unlimited Public Projects<br />
        <i className="fas fa-check"></i>  Community Access<br />
        <i className="fas fa-check"></i>   Unlimited Private Projects<br />
        <i className="fas fa-check"></i>   Dedicated Phone Support<br />
        <i className="fas fa-check"></i>    Free Subdomain<br />
        <i className="fas fa-check"></i>   Monthly Status Reports<br />
        </p>}>
      </Card>
      </div>
    </div>
  );
}

export default App;
