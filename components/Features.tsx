export default function Feature(props:{
    title: string,
    description: string,
    button: string,
    image: string,
    alt: string
}){
    return(
        <>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>{props.button}</button>
            </div>
            <div>
                <img src={props.image} alt={props.alt}/>
            </div>
    </>
    )
}