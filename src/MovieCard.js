

const MovieCard = ({ movie }) => {
    const { title, description, posterURL, rating } = movie;

    return(
        <div className='movieCard'>
            <img src={posterURL} alt={title} />
            <p>{title}</p>
            <p>{description}</p>
            <p>Rating: {rating}</p>
        </div>
    );

};

export default MovieCard