import React, {useState} from "react";
import Validator from "../../../Validator/Validator";
import {serviceFree} from "../../../Data/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../App.css';
const FormSelectFree = ({ formData, setFormData }) => {

    const handleChangeOption = (e) => {
        setFormData({...formData, optionSelected: e.target.value})
    }

    return(
        <div className=" w-100">
            <form className="w-100">
                <div className="form-group">
                    <select value={formData.optionSelected} onChange={handleChangeOption} name="serviceFree" className="form-control text-button" id="exampleFormControlSelect1">
                        <option>Chọn dịch vụ khám</option>
                        {serviceFree.map(otp => (
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
export default FormSelectFree;