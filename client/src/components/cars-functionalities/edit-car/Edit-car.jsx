import '../edit-car/editCar-styles.css';

export function EditCar(carId) {
    return (
        <div className="editCar-form-container">
            <form className="editCar-form" >
                <h3>Edit car</h3>
                <div className="fields-edit">
                    <div className="img-selectEdit">
                        <input type="text" id="image-selectEdit" placeholder="Image url..." name="imageUrl" />
                    </div>
                    <div className="brandEdit">
                        <select id="car-brandEdit" name="brand">
                            <option value="">Select Brand</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Honda">Honda</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Mercedes">Mercedes-Benz</option>
                            <option value="Opel">Opel</option>
                        </select>
                    </div>

                    <div className="modelEdit">
                        <select id="car-modelEdit" name="model">
                            <option value="">Select Model</option>
                            <option>530d</option>
                        </select>
                    </div>

                    <div className="yearEdit">
                        <select id="yearSelectEdit" name="year">
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

                    <div className="priceEdit">
                        <input type="number" placeholder="Price" name="price" id="priceEditInput" />
                    </div>

                    <textarea name="description" id="descriptionForEdit" cols="35" rows="4" placeholder="Description..." ></textarea>

                    <div className="phone-numberEdit">
                        <input type="text" name="phoneNumber" id="phone-numberInputEdit" placeholder="Phone number..." />
                    </div>

                </div >
                <div className="edit-car-btn">
                    <input type="submit" value="Edit Car" />
                </div>
            </form >
        </div >
    );
}