import React, {useState} from "react";
import {useContext} from "react";
import {Page} from "../../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const FormPatientInfor = ({formData, setFormData}) => {
    const context = useContext(Page);

    const [nameError, setNameError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');

    const handleNameChange = (e) => {
        setNameError('');
        setFormData({...formData, name: e.target.value})
    }

    const handleDateOfBirthChange = (e) => {
        setDateOfBirthError('');
        setFormData({...formData, dateOfBirth: e.target.value})
    }

    const handlePhoneChange = (e) => {
        setPhoneError('');
        setFormData({...formData, numberPhone: e.target.value})
    }

    const handleAddressChange = (e) => {
        setAddressError('');
        setFormData({...formData, address: e.target.value})
    }

    const handleChangeOptionGender = (e) => {
        setFormData({...formData, gender: e.target.value})
    }

    const prePage = () => {
        context.page_0();
    }

    const handleFormPatientInforSubmit = () => {
        if (formData.name === '' || formData.dateOfBirth === '' || formData.numberPhone === '' || formData.address === '') {
            if (formData.name !== '') {

            } else {
                setNameError('Vui lòng nhập họ và tên!');
            }

            if (formData.dateOfBirth !== '') {

            } else {
                setDateOfBirthError('Vui lòng chọn ngày sinh!');
            }

            if (formData.numberPhone !== '') {

            } else {
                setPhoneError('Vui lòng nhập số điện thoại!');
            }

            if (formData.address !== '') {

            } else {
                setAddressError('Vui lòng nhập địa chỉ!');
            }
        } else {
            context.page_2();

        }

    }

    return (
        <div className="shadow-sm d-flex justify-content-center flex-column w-100 pb-5">
            <div className="d-flex justify-content-center mt-3 w-100">
                <div className="w-95 bg_color_1">

                    <p className="font_announce m-2 text-success p-1">Các trường đánh dấu <span
                        className="text-danger">*</span> là các trường bắt buộc nhập. Thông tin bệnh nhân, thông
                        tin đăng ký khám cần nhập chính xác</p>

                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="font_title">THÔNG TIN BỆNH NHÂN</p>
            </div>

            <div className="row sub_form mt-2">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">Họ và tên <span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.name} onChange={handleNameChange}
                                           className="form-control text-button" type="text" placeholder="Nhập họ tên"/>
                                    {nameError && <div className="error-msg">{nameError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">Ngày sinh <span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.dateOfBirth} onChange={handleDateOfBirthChange}
                                           className="form-control text-button" type="date"/>
                                    {dateOfBirthError && <div className="error-msg">{dateOfBirthError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub_form row">
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95 ml-3">
                        <p className="text-14">Số điện thoại <span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <form className="w-100">
                                <div className="form-group">
                                    <input value={formData.numberPhone} onChange={handlePhoneChange}
                                           className="form-control text-button" type="text"
                                           placeholder="Nhập số điện thoại"/>
                                    {phoneError && <div className="error-msg">{phoneError}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-95">
                        <p className="margin text-14">Giới tính <span className="text-danger">*</span></p>
                        <div className="d-flex justify-content-center align-items-center w-100 margin">
                            <form className="w-100">
                                <div className="form-group">
                                    <select value={formData.gender} onChange={handleChangeOptionGender}
                                            className="form-control text-button" id="exampleFormControlSelect1">
                                        <option>Chọn giới tính</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-none ml-3 mt-2">
                <p className="text-14">Địa chỉ <span className="text-danger">*</span></p>
                <div className="d-flex justify-content-center align-items-center w-95">
                    <form className="w-100">
                        <div className="form-group">
                            <input value={formData.address} onChange={handleAddressChange}
                                   className="form-control text-button" type="text" placeholder="Nhập địa chỉ"/>
                            {addressError && <div className="error-msg">{addressError}</div>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center main mt-3">
                <button onClick={prePage}
                        className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                    Quay lại
                </button>
                <button onClick={handleFormPatientInforSubmit}
                        className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                    Đăng ký khám
                </button>
            </div>

        </div>
    )
}
export default FormPatientInfor;
