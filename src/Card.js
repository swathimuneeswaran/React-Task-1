import './style.css'

function Card(props) {
  return (
    <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title head">{props.name}</h5>
        <h2>{props.name1}</h2>
        
        <p className="card-text head"> {props.n}</p>
        <a href="#" className="btn button">BUTTON</a>
      </div>
    </div>
  </div>

);
}

export default Card;
