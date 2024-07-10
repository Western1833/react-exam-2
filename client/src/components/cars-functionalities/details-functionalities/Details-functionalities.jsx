import '../details-functionalities/details-functionalities-styles.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext.jsx';
import { deleteCar } from '../../../services/CarServices.js';
import { PATHS } from '../../../utils/api.js';
import { getAllLikes, getLikesData, hasLiked, likeCar } from '../../../services/LikesServices.js';

export function DetailsFunctionalities(props) {
    const { _id, isAuthenticated, username } = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const [likes, setLikes] = useState(0);
    const [hasUserLiked, setHasUserLiked] = useState(false);
    const [usernames, setUsernames] = useState([]);

    const ownerId = props.ownerId;

    const auth = localStorage.getItem('auth');
    const currentLoggedInUser = JSON.parse(auth);
    const userId = currentLoggedInUser ? currentLoggedInUser._id : null;

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

    const fetchLikes = async () => {
        try {
            const likes = await getAllLikes(id);
            setLikes(likes);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchUsernames = async () => {
        try {
            const data = await getLikesData(id);
            setUsernames(data);
        } catch (err) {
            console.log(err);
        }
    }

    const checkUserLiked = async () => {
        try {
            const result = await hasLiked(id, userId);
            setHasUserLiked(result > 0);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchLikes();
        checkUserLiked();
        fetchUsernames();
    }, [id, userId]);

    const sendLike = async () => {
        try {
            await likeCar(id, username);
            await fetchLikes();
            await fetchUsernames();  // Fetch the updated list of usernames
            setHasUserLiked(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="edit-functionalities">
            <div className="likes">
                {
                    isVisible && (
                        <div className="popup">
                            <ul>
                                {usernames.map((username, index) => (
                                    <li key={index}>{username.username}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }
                <button id="likes-btn" onClick={togglePopup}>Likes</button>
                <input type="number" id="likes" disabled value={likes} />
                {
                    !isOwner && isAuthenticated && !hasUserLiked && (
                        <button type="button" className="submit-with-icon" onClick={sendLike}>
                            <img src="/thumbsup.png" alt="Like" />
                        </button>
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
