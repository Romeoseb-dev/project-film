import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const FavoriIcon = () => {
    const [fav, setFav] = useState(true);
    const toggleIcon = () => {
        setFav(!fav);
    };
    return (
        <div onClick={toggleIcon}>
    {fav ? <FaRegStar color="red"></FaRegStar> : <FaStar color="red"></FaStar>}
    </div>
    )

}

export default FavoriIcon