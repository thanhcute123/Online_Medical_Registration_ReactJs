import React from "react";
import {useContext} from "react";
import {Page} from "../../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';

const ConfirmRegisInfor = ({formData, setFormData}) => {
    const context = useContext(Page);

    const prePage = () => {
        context.page_1();
    }
    const nextPage = () => {
        context.page_3();
    }
    return (
        <div className="shadow-sm d-flex justify-content-center align-items-center flex-column w-100 pb-5">
            <div className="d-flex justify-content-center align-items-center mt-3">
                <p className="font_title">XÁC NHẬN CÁC THÔNG TIN ĐĂNG KÝ</p>
            </div>
            <div className="w-100 row sub_form text-13 mt-2">

                <div className="col-sm-12 col-lg-6 col-md-12 border-r">
                    <div className="w-100">
                        <p className="ml-3 font_title">THÔNG TIN BỆNH NHÂN</p>
                    </div>

                    <div className="w-100">
                        <p className="ml-3">Họ và tên: <span className="text-color text-button">{formData.name}</span>
                        </p>

                    </div>
                    <div className="w-100">
                        <p className="ml-3">Ngày sinh: <span
                            className="text-color text-button">{formData.dateOfBirth}</span></p>

                    </div>
                    <div className="w-100">
                        <p className="ml-3">Số điện thoại: <span
                            className="text-color text-button">{formData.numberPhone}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Giới tính: <span className="text-color text-button">{formData.gender}</span>
                        </p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Địa chỉ: <span className="text-color text-button">{formData.address}</span>
                        </p>
                    </div>

                </div>
                <div className="col-sm-12 col-lg-6 col-md-12">
                    <div className="w-100">
                        <p className="ml-3 font_title">THÔNG TIN ĐĂNG KÝ KHÁM</p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Loại dịch vụ: <span
                            className="text-color text-button">{formData.valueButtonService}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Dịch vụ khám: <span
                            className="text-color text-button">{formData.optionSelected}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Ngày đăng ký khám: <span
                            className="text-color text-button">{formData.input}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Thời gian đăng ký khám: <span
                            className="text-color text-button">{formData.validInputTime}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Mã số bệnh nhân: <span
                            className="text-color text-button">{formData.validInputId}</span></p>
                    </div>
                    <div className="w-100">
                        <p className="ml-3">Mô tả: <span
                            className="text-color text-button">{formData.validInputSymptom}</span></p>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center main mt-none mb-4 w-100 mt-5">
                <button onClick={prePage}
                        className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                    Quay lại
                </button>
                <button onClick={nextPage}
                        className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                    Xác nhận đăng ký
                </button>
            </div>

        </div>
    )
}
export default ConfirmRegisInfor;