import {useState, createContext} from "react";

const Page = createContext();

const PageProvider = ({children}) => {

    const [page, setPage] = useState(0);

    const page_1 = () => {
        setPage(1);
    }

    const page_0 = () => {
        setPage(0);
    }
    const page_2 = () => {
        setPage(2);
    }
    const page_3 = () => {
        setPage(3);
    }

    const value = {
        page,
        page_1,
        page_0,
        page_2,
        page_3
    }
    return (
        <Page.Provider value={value}>
            {children}
        </Page.Provider>

    )
}
export {Page, PageProvider}