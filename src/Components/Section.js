const Section=({title, description})=>{


    return(
        <div className="section">
<h1>{title}</h1>
<p>{description}</p>
<hr></hr>
        </div>
    )
}

export default Section;

//inside jsx we cannot use any js loop like for in, for, while, even if else 

//use higher order function like map filter reduce foreach and insted of if else user ternary operator in curly bracket