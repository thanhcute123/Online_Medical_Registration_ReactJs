import { useState, createContext } from "react";

const Page = createContext();

const PageProvider = ({ children }) => {

    const [page, setPage] = useState(0);
    // const [toggleArray, setToggleArray] = useState([false,false,false,false,false]);
    // const [toggleArrayRow2, setToggleArrayRow2] = useState([false,false,false,false,false]);

    // const handleClick = (i) => {
    //     const temp = [...toggleArray];
    //     temp[i] = !temp[i];
    //     setToggleArray(temp);
    //
    //
    // }
    //
    // const handleClickRow2 = (i) => {
    //     const temp = [...toggleArrayRow2];
    //     temp[i] = !temp[i];
    //     // setFormData({...formData, toggleArrayRow2:  temp})
    //     setToggleArrayRow2(temp);
    //
    //     // console.log(formData);
    // }

    const page_1 = () => {
      setPage(1);
    }

    const page_0 = () => {
        setPage(0);
    }

    const value = {
        page,
        page_1,
        page_0
    }
    return(
        <Page.Provider value={value}>
            {children}
        </Page.Provider>

    )
}
export { Page, PageProvider }