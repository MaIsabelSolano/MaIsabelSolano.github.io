import '../Components/CSS/Ing.css'

const Card = ({title, desc, img, color, linkName, linkURL}) => {

    const cond = (typeof linkName !== "undefined")
    console.log(cond);

    return (
        <div className='gallery-cell' style={{backgroundColor: color}}>

            <h3 style={{textAlign:"center"}} >{title}</h3>
            <p style={{textAlign:"center"}}>{desc}</p>
            <img src={img}/>

            {cond ? 
                <a href={linkURL} target="_blank" >
                    {linkName}
                </a> 
                :
                <></>
            }

          
                
            
            
            

        </div>
    )
}

export default Card