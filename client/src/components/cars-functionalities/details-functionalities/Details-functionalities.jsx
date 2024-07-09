import '../details-functionalities/details-functionalities-styles.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext.jsx';

export function DetailsFunctionalities(props) {
    const {_id} = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(false);
    const ownerId = props.ownerId;

    let isOwner = ownerId === _id;

    const togglePopup = () => {
        setIsVisible(!isVisible);
    }

    const onDelete = () => {
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
            {
                isOwner && (
                    <>
                        <Link to='/cars/:id/edit' id="edit-link">Edit</Link>
                        <Link to='/cars/:id/delete' id="delete-link" onClick={onDelete}>Delete</Link>
                    </>
                )
            }
        </div>
    );
}