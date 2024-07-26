import { createCar } from '../../../services/CarServices.js';
import '../create-car/create-car-styles.css';
import { useNavigate } from "react-router-dom";

export default function CreateCar() {
    const navigate = useNavigate();
    const createCarSubmitHandler = async (e) => {
        e.preventDefault();
        const carData = Object.fromEntries(new FormData(e.currentTarget));

        await createCar(carData);

        navigate('/');
    }

    const onBrandClick = (e) => {
        const brand = e.target.value;

        return brand;
    }

    const updateModelField = (brand) => {

        switch (brand) {
            case 'Audi':
                return ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
            case 'Bmw':
                return ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series'];
            case 'Mercedes':
                return ['A-Class', 'B-Class', 'C-Class', 'E-Class', 'S-Class', 'ML'];
            case 'Honda':
                return ['Civic', 'Accord', 'CR-V', 'Fit', 'HR-V', 'Pilot'];
            case 'Mazda':
                return ['Mazda3', 'Mazda6', 'CX-3', 'CX-5', 'CX-9'];
            case 'Toyota':
                return ['Corolla', 'Camry', 'RAV4', 'Prius', 'Highlander', 'Yaris'];
            case 'Opel':
                return ['Astra', 'Corsa', 'Insignia', 'Mokka', 'Grandland X'];
            case 'VW':
                return ['Golf', 'Polo', 'Passat', 'Tiguan', 'Touareg'];
            case 'Peugeot':
                return ['208', '308', '508', '2008', '3008', '5008'];
            default:
                return [];
        }
    }

    return (
        <div className="createCar-form-container">
            <form className="createCar-form" onSubmit={createCarSubmitHandler}>
                <h3>Add your car</h3>
                <div className="fields-create">
                    <div className="img-select">
                        <input type="text" id="image-select" placeholder="Image url..." name="imageUrl" />
                    </div>
                    <div className="brand">
                        <select id="car-brand" name="brand" onClick={onBrandClick}>
                            <option value="">Select Brand</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Honda">Honda</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Mercedes">Mercedes-Benz</option>
                            <option value="Opel">Opel</option>
                        </select>
                    </div>

                    <div className="model">
                        <select id="car-model" name="model">
                            <option value="">Select Model</option>
                            <option>530d</option>
                        </select>
                    </div>

                    <div className="year">
                        <select id="year" name="year">
                            <option value="">Select Year</option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>

                    <div className="price">
                        <input type="number" placeholder="Price" name="price" id="price" />
                    </div>

                    <textarea name="description" id="description" cols="35" rows="4" placeholder="Description..." ></textarea>

                    <div className="phone-number">
                        <input type="text" name="phoneNumber" id="phone-number" placeholder="Phone number..." />
                    </div>

                </div >
                <div className="add-car-btn">
                    <input type="submit" value="Add Car" />
                </div>
            </form >
        </div >
    );
}