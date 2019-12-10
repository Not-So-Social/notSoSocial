import React from 'react';

export default function SelectGenre(props) {
    return (
        <div className="dropdownGenre" >
            <label className="visuallyHidden" htmlFor="genres">please select a genre to get results for that genre</label>
            <select name="genres" id="genres" onChange={props.filteredShow}>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Anime">Anime</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Family">Family</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Science-Fiction">Science-Fiction</option>
                <option value="Thriller">Thriller</option>
            </select>
        </div>
    )
}