import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { EndPoint } from "../constans/api";

export const apiContext = createContext({});
const ApiProvider = ({ children }) => {
  const [dataSpecies, setDataSpecies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perpage, setPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [loai, setLoai] = useState({});
  const [reload, setReLoad] = useState(false);
const [loadEvent,setLoadEvent] = useState(false)


  const param = `/species?paginate=true&page=${currentPage}&perpage=${perpage}&with=roles,createdBy&search=${searchText}&inactive=-1`;
  const url = EndPoint + param;
  useEffect(() => {
    const GetData = async () => {
      setLoadEvent(true);
      try {
        const response = await axios.get(url);
        setDataSpecies(response.data);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoadEvent(false);
      }
      

    };
    GetData();
  }, [url, reload]);

  return (
    <apiContext.Provider
      value={{
        dataSpecies,
        setSearchText,
        setCurrentPage,
        currentPage,
        setPerPage,
        perpage,
        showModal,
        setShowModal,
        loai,
        setLoai,
        reload,
        setReLoad,
        loadEvent
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

export default ApiProvider;
