import { DetailsFunctionalities } from '../details-functionalities/Details-functionalities.jsx';
import '../details/details-styles.css';

export function Details() {
    return (
        //         <div class="card">
        //     <img src={{carDetails?.imageUrl}}/>
        //     <div class="edit-content-wrapper">
        //         <ul>
        //             <li>Brand: {{carDetails?.brand}}</li>
        //             <li>Model: {{carDetails?.model}}</li>
        //             <li>Year: {{carDetails?.year}}</li>
        //             <li>Price: {{carDetails?.price}}$</li>
        //         </ul>

        //         <aside>
        //             <textarea name="edit-textarea" id="edit-content-wrapper" cols="27" rows="4" disabled>{{carDetails?.description}}</textarea>
        //             <span>Phone number: {{carDetails?.phoneNumber}}</span>
        //         </aside>
        //     </div>
        //     <app-details-functionalities [carDetails]="carDetails"/>
        // </div>
        <div className="card-details">
            <img src='' />
            <div className="edit-content-wrapper">
                <ul>
                    <li>Brand: BMW</li>
                    <li>Model: 530d</li>
                    <li>Year: 2004</li>
                    <li>Price: 7600$</li>
                </ul>

                <aside>
                    <textarea name="edit-textarea" id="edit-content-wrapper" cols="27" rows="4" disabled>{ }</textarea>
                    <span>Phone number: 02746960</span>
                </aside>
            </div>
            <DetailsFunctionalities/>
        </div>
    );
}