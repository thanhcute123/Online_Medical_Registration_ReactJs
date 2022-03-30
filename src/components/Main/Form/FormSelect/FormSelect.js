import React, {useState} from "react";
import Validator from "../../../Validator/Validator";
import {service} from "../../../Data/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../App.css';
const FormSelect = ({ formData, setFormData }) => {

    const handleChangeOption = (e) => {
        setFormData({...formData, optionSelected: e.target.value})
    }
    return(
        <div className=" w-100">
            <form className="w-100">
                <div className="form-group">
                    <select value={formData.optionSelected} onChange={handleChangeOption} name="service" className="form-control text-button" id="exampleFormControlSelect1">
                        <option>Chọn dịch vụ khám</option>
                        {service.map(otp => (
                            <optgroup key={otp.id} label={otp.name}>
                                {
                                    otp.type.map(values =>(
                                        <option value={values}>{values}</option>
                                    ))
                                }
                            </optgroup>
                            )
                        )}
                    </select>
                </div>
            </form>
        </div>
    )
}
export default FormSelect;