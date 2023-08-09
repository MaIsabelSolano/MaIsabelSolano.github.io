import '../Components/CSS/Ing.css'

const Card = ({title, desc, img, color}) => {

    return (
        <div className='gallery-cell' style={{backgroundColor: color}}>

            <h3>{title}</h3>
            <p>{desc}</p>
            <img src={img}/>

        </div>
    )
}

export default Card