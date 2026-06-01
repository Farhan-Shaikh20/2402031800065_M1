import "../style/props.css"

function Card(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.level}</p>
        </div>
    )
}

function Props(){
    return(
        <div id="props" className="concept-setion">
             <h2>📦 Props</h2>
             <p className="concept-desc">Parent components data send karta hai and child receive karta hai</p>
             <div className="cards-row">
                 <Card name="React" level="Frontend" />
                 <Card name="Node.js" level="Backend" />
                 <Card name="MongoDB" level="Database" />
             </div>
        </div>
    )
}

export default Props