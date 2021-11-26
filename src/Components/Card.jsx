import '../Sass/Card.scss';

const Card = ({image, title, email}) => {
    
    return(
        <div className="card">
            <div className="card__image">
                <img src={image} alt={image} />
            </div>

            <div className="card__description">
                <h3>
                    {title}
                </h3>

                <p>
                    {email}
                </p>
            </div>
        </div>
    )
}

export default Card;