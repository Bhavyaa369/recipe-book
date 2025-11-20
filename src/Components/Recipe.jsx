export default function RecipeCard(props){
    return(
    <div className="recipe-container">
    <header className="recipe-header">
      <h2>{props.RecipeName}</h2>
       <p>{props.time}</p>
    </header>
    <section className="recipe-details">
      <div>
        <p>{props.server}</p>
      <p>{props.difficulty}</p>
      <p>{props.type}</p>
      </div>
      
      <img className="foodimg"
      src={props.img} 
      alt="img not found" />
    </section>
    <footer className="recipe-footer">
      <small><i>{props.chiefname}</i></small>
    </footer>
        
    </div>

    );
}