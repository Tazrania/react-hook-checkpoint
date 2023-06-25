import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [posterURL, setPosterURL] = useState('');
const [rating, setRating] = useState('');

const handleTitleChange = event => {
    setTitle(event.target.value);
};

const handleDescriptionChange = event => {
    setDescription(event.target.value);
};

const handlePosterURLChange = event => {
    setPosterURL(event.target.value);
};

const handleRatingChange = event => {
    setRating(event.target.value);
};

const handleAddMovie = () => {
    const newMovie = {
    title,
    description,
    posterURL,
    rating
    };
    onAddMovie(newMovie);

    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
};

return (
    <div className="movie-form">
    <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
    />
    <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
    />
    <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={handlePosterURLChange}
    />
    <input
        type="number"
        min="0"
        max="10"
        placeholder="Rating"
        value={rating}
        onChange={handleRatingChange}
    />
    <button onClick={handleAddMovie}>Add Movie</button>
    </div>
);
};

export default MovieForm;
