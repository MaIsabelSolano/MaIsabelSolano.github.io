const Card = ({title, desc, img}) => {

    return (
        <div style={{
            backgroundColor: "yellow",
            width: "10em"
        }}>

            <h3>{title}</h3>
            <p>{desc}</p>
            <img src={img}/>

        </div>
    )
}

export default Card