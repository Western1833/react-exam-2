import '../details-functionalities/details-functionalities-styles.css';
import { useState } from 'react';

export function DetailsFunctionalities() {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);
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
            <a id="edit-link" >Edit</a>
            <a id="delete-link" >Delete</a>
        </div>
    );
}