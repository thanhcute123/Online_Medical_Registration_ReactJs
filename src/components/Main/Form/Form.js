import React from "react";
import { useState, useContext} from "react";
import FormSelect from "./FormSelect/FormSelect";
import FormSelectFree from "./FormSelectFree/FormSelectFree";
import { Page } from "../../Store/ClickContext";
import {date, timeRow2} from "../../Data/Data";
import { time } from "../../Data/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';



const Form = ({ formData, setFormData }) => {
    const context = useContext(Page);

    const [timeError, setTimeError] = useState('');
    const [array, setArray] = useState([]);
    const [idError, setIdError] = useState('');
    const [symptomError, setSymptomError] = useState('');
    const [service, setService] = useState(0);
    const [dateError, setDateError] = useState('');
    const [toggleArray, setToggleArray] = useState([false,false,false,false,false]);
    const [toggleArrayRow2, setToggleArrayRow2] = useState([false,false,false,false,false]);
    const classActive = 'col-sm-12 col-lg-6 col-md-12 bg-color-active bt p-2 text-button text-white';
    const classNonActive = 'col-sm-12 col-lg-6 col-md-12 bt bg-color p-2 text-button';
    const classButtonActive = 'col-lg-2 col-md-4 col-sm-3 rounded bt bg-color-active text-white text-button p-2 ml-2';
    const classButtonNonActive = 'col-lg-2 col-md-4 col-sm-3 rounded bt bg-color text-button p-2 ml-2';

    const handleInputChange = (e) => {
        setDateError('');
        setFormData({...formData, input: e.target.value})
    }
    const handleTimeChange = (e) => {
        setTimeError('');
        setFormData({...formData, validInputTime: formData.validInputTime.concat(e.target.value)});

        console.log(formData);

    }
    // const handleTimeChange3 = (e) => {
    //     setTimeError('');
    //     setFormData({...formData, validInputTime: formData.validInputTime.concat(e.target.value)});
    //     // setFormData({...formData, arrayRow1: context.toggleArray});
    //
    //     console.log(formData);
    //     // console.log(context.toggleArray);
    // }
    // const handleTimeChange2 = (e) => {
    //     setTimeError('');
    //     setFormData({...formData, validInputTime: formData.validInputTime.concat(e.target.value)});
    //     setFormData({...formData, arrayRow2: context.toggleArrayRow2});
    //
    //     console.log(formData);
    //     // console.log(context.toggleArray);
    // }

    const handleIdChange = (e) => {
        setIdError('');
        setFormData({...formData, validInputId: e.target.value})
    }
    const handleSymptomChange = (e) => {
        setSymptomError('');
        setFormData({...formData, validInputSymptom: e.target.value})
    }

    const checkButtonClicked = (array) => {
        for (let i = 0; i < array.length; i++) {
            if(array[i] === true) {
                return false;
            }
        }
        return true;
    }

    const handleFormSubmit = () => {
        if(formData.input === '' || (checkButtonClicked(toggleArray) === true && checkButtonClicked(toggleArrayRow2) === true) || formData.validInputId === '' || formData.validInputSymptom === '') {
            if(formData.input !== '') {

            }else {
                setDateError('Vui lòng chọn ngày đăng ký khám!');
            }

            if(checkButtonClicked(toggleArray) === true && checkButtonClicked(toggleArrayRow2) === true) {
                setTimeError('Vui lòng chọn thời gian đăng ký khám!');
            }else{
                setTimeError('');
            }

            if(formData.validInputId !== '') {

            }else {
                setIdError('Vui lòng nhập mã số bệnh nhân!');
            }

            if(formData.validInputSymptom !== '') {

            }else {
                setSymptomError('Vui lòng nhập triệu chứng, lý do khám!');
            }
        }else {
           context.page_1();
        }

    }


    const handleClick = (i) => {
        const temp = [...toggleArray];
        temp[i] = !temp[i];
        setToggleArray(temp);


    }

    const handleClickRow2 = (i) => {
        const temp = [...toggleArrayRow2];
        temp[i] = !temp[i];
        // setFormData({...formData, toggleArrayRow2:  temp})
        setToggleArrayRow2(temp);

        // console.log(formData);
    }
    function changeService(type) {
        setService(type);
    }


    function getStatus(day) {
        for (let i = 0; i < date.length ; i++) {
            if(day === date[i].date) {
                return date[i].status;
            }
        }
        return -1 ;
    }

    function handleSubmitButton(event) {
        event.preventDefault();
    }

    return(

            <div className="shadow-sm d-flex justify-content-center flex-column w-100 pb-5">
                <div className="d-flex justify-content-center mt-3 w-100">
                    <div className="w-95 bg_color_1">
                        {/*<div className="w-100">*/}
                        <p className="font_announce m-2 text-success p-1">Các trường đánh dấu <span
                            className="text-danger">*</span> là các trường bắt buộc nhập. Thông tin bệnh nhân, thông
                            tin đăng ký khám cần nhập chính xác</p>
                        {/*</div>*/}
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <p className="font_title">THÔNG TIN ĐĂNG KÝ KHÁM</p>
                </div>
                <div className="w-100 mt-none">
                    <p className="ml-3">Loại dịch vụ <span className="text-danger">*</span></p>
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <div className="w-95 row">
                            <button onClick={() => changeService(0)}
                                    className={service === 0 ? classActive : classNonActive}>
                                Dịch vụ có thu phí
                            </button>
                            <button onClick={() => changeService(1)}
                                    className={service === 0 ? classNonActive : classActive}>
                                Tư vấn miễn phí
                            </button>
                        </div>

                    </div>
                </div>
                <div className="row sub_form mt-2">
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <div className="w-95 ml-3">
                            <p>Dịch vụ khám <span className="text-danger">*</span></p>
                            {
                                service === 0 ? <FormSelect formData={formData} setFormData={setFormData}/> : <FormSelectFree formData={formData} setFormData={setFormData}/>
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <div className="w-95">
                            <p className="margin">Ngày đăng ký khám <span className="text-danger">*</span></p>
                            <div className="d-flex justify-content-center align-items-center w-100 margin">
                                <form className="w-100">
                                    <div className="form-group">
                                        <input name="date" value={formData.input} id="date" onChange={handleInputChange} className="form-control text-button" type="date"/>
                                        {dateError && <div className="error-msg">{dateError}</div>}

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub_form row">
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <div className="w-95 ml-3">
                            <p>Thời gian đăng ký khám <span className="text-danger">*</span></p>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <form className="w-100" onSubmit={handleSubmitButton}>

                                    <div className="form-group">
                                        {
                                            getStatus(formData.input) === -1 ? <div className="form-control text-button bg-color border-success text-center">
                                                    Chọn ngày đăng ký khám
                                                </div> :
                                                getStatus(formData.input) === 1 ?
                                                    <>
                                                        <div className="form-group ml-1">
                                                            <div className="row">
                                                                {/*{time.map(times => (*/}
                                                                {/*     times.time.map(value => (*/}
                                                                { toggleArray.map((item,i) => (
                                                                    <input type="button" value={time[i]} onClick={(e) => {handleClick(i); handleTimeChange(e)}} className={item ? classButtonActive : classButtonNonActive} />

                                                                ))}

                                                                {/*<input type="button" value="7h-8h" onClick={(e) => {handleClick()}} />*/}

                                                            </div>
                                                            <div className="row mt-1">
                                                                { toggleArrayRow2.map((item,i) => (
                                                                    <input type="button" value={timeRow2[i]} onClick={(e) => {handleClickRow2(i); handleTimeChange(e)}} className={item ? classButtonActive : classButtonNonActive} />

                                                                ))}
                                                            </div>
                                                            {timeError && checkButtonClicked(toggleArray) === false || checkButtonClicked(toggleArrayRow2) === false ?<></> : <div className="error-msg">{timeError}</div>}
                                                        </div>
                                                    </> : <p className="form-control text-button text-button bg-red text-center text-white">Chưa
                                                        có lịch khám vào ngày đã chọn</p>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-12">
                        <div className="w-95">
                            <p className="margin">Nhập mã số bệnh nhân <span className="text-danger">*</span></p>
                            <div className="d-flex justify-content-center align-items-center w-100 margin">
                                <form className="w-100">
                                    <div className="form-group">
                                        <input value={formData.validInputId} onChange={handleIdChange} className="form-control text-button" type="text"
                                               placeholder="Nhập mã số bệnh nhân"/>
                                        {idError && <div className="error-msg">{idError}</div>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-none ml-3 mt-2">
                    <p>Mô tả <span className="text-danger">*</span></p>
                    <div className="d-flex justify-content-center align-items-center w-95">
                        <form className="w-100">
                            <div className="form-group">
                                    <textarea value={formData.validInputSymptom} onChange={handleSymptomChange} className="form-control text-button" id="exampleFormControlTextarea1"
                                              rows="2" placeholder="Nhập triệu chứng, lý do khám"></textarea>
                                {symptomError && <div className="error-msg">{symptomError}</div>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center main mt-3">
                    <button className="col-sm-4 bg-color btn p-2 text-button border-success bt mr-2 margin">
                        Đính kèm tài liệu
                    </button>
                    <button onClick={handleFormSubmit} className="col-sm-4 btn bg-color-active p-2 text-button bt margin text-white">
                        Tiếp theo
                    </button>
                </div>

            </div>

    )
}
export default Form;
