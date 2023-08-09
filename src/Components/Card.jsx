import '../Components/CSS/Ing.css'

const Card = ({title, desc, img, color, linkName, linkURL}) => {

    return (
        <div className='gallery-cell' style={{backgroundColor: color}}>

            <h3 style={{textAlign:"center"}} >{title}</h3>
            <p style={{textAlign:"center"}}>{desc}</p>
            <img src={img}/>
            <a href={linkURL}>{linkName}</a>

        </div>
    )
}

export default Card