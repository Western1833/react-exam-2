import '../details-functionalities/details-functionalities-styles.css';

export function DetailsFunctionalities() {
    return(
//         <div class="edit-functionalities">
//     <div class="likes">
//         <div *ngIf="showPopup" class="popup">
//             <ul>
//                 <li *ngFor="let username of usernames">{{username}}</li>
//             </ul>
//         </div>
//         <button id="likes-btn" (click)="togglePopup()">Likes</button>
//         <input type="number" id="likes" disabled [value]="totalLikes">
//         <button type="button" class="submit-with-icon" *ngIf="isAuthenticated && !isOwner && !hasLiked" (click)="onLikeClick()">
//             <img src="../../../assets/thumbsup.png" alt="Like"></button>
//     </div>
//     <a [routerLink]="['/data/edit', carDetails?._id]" id="edit-link" *ngIf="isAuthenticated && isOwner">Edit</a>
//     <a id="delete-link" *ngIf="isAuthenticated && isOwner" (click)="openConfirmationDialog()">Delete</a>
// </div>
<div className="edit-functionalities">
    <div className="likes">
        <div className="popup">
            <ul>
                <li></li>
            </ul>
        </div>
        <button id="likes-btn">Likes</button>
        <input type="number" id="likes" disabled/>
        <button type="button" className="submit-with-icon">
            <img src="../../../assets/thumbsup.png" alt="Like"/></button>
    </div>
    <a id="edit-link" >Edit</a>
    <a id="delete-link" >Delete</a>
</div>
    );
}