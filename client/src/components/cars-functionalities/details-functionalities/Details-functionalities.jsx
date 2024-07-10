import '../details-functionalities/details-functionalities-styles.css';
import { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext.jsx';
import { deleteCar } from '../../../services/CarServices.js';
import { PATHS } from '../../../utils/api.js';

export function DetailsFunctionalities(props) {
    const {_id, isAuthenticated} = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const ownerId = props.ownerId;

    let isOwner = ownerId === _id;

    const togglePopup = () => {
        setIsVisible(!isVisible);
    }

    const onDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");

        if (confirmDelete) {
            await deleteCar(id);
            navigate(-1);
        } else {
            navigate(`${PATHS.details}/${id}`);
        }
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
                {
                    !isOwner && isAuthenticated && (
                        <button type="button" className="submit-with-icon">
                    <img src="/thumbsup.png" alt="Like" /></button>
                    )
                }
            </div>
            {
                isOwner && (
                    <>
                        <Link to={`/cars/${id}/edit`} id="edit-link">Edit</Link>
                        <a id="delete-link" onClick={onDelete}>Delete</a>
                    </>
                )
            }
        </div>
    );
}