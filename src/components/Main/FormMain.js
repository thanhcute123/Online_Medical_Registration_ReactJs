import React, {useState} from "react";
import { useContext } from "react";
import HeaderForm from "./HeaderForm/HeaderForm";
import Form  from "./Form/Form";
import { Page } from "../Store/ClickContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import FormPatientInfor from "./FormPatientInfor/FormPatientInfor";

// export const clickContext = createContext();

const FormMain = () => {

    // let valueButton = [];
    const [formData, setFormData] = useState({
        input: '',
        validInputTime: [],
        arrayRow1: [],
        arrayRow2: [false],
        validInputId: '',
        validInputSymptom: '',
        optionSelected: 'Chọn dịch vụ khám',
        name: '',
        dateOfBirth: '',
        numberPhone: '',
        gender: 'Chọn giới tính',
        address: ''
    });

    const context = useContext(Page);
    // const [click, setClick] = useState(0);
    return(
        <div>
            <div className="row">
                <div className="main d-flex justify-content-center align-items-center col-sm-7 mt-0 ml-auto mr-auto ">
                    <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                        <HeaderForm/>
                        {
                            (context.page === 0 && <Form formData={formData} setFormData={setFormData}/>)
                            || (context.page === 1 && <FormPatientInfor formData={formData} setFormData={setFormData}/>)

                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormMain;