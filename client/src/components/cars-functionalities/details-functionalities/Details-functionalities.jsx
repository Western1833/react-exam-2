import '../details-functionalities/details-functionalities-styles.css';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export function DetailsFunctionalities() {
    const [isVisible, setIsVisible] = useState(false);
    const {id} = useParams();

    const togglePopup = () => {
        setIsVisible(!isVisible);
    }

    const onEdit = () => {
        console.log('edit');
    }

    const onDelete = () => {
        console.log(id);
    }

    return (
        <div className="edit-functionalities">
            <div className="likes">
                {
                    isVisible && (
                        <div className="popup">
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    )
                }
                <button id="likes-btn" onClick={togglePopup}>Likes</button>
                <input type="number" id="likes" disabled />
                <button type="button" className="submit-with-icon">
                    <img src="/thumbsup.png" alt="Like" /></button>
            </div>
            <Link id="edit-link" onClick={onEdit}>Edit</Link>
            <Link id="delete-link" onClick={onDelete}>Delete</Link>
        </div>
    );
}