import ItemList from "../Components/ItemList.js";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css";


const getAllItemsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/items`
  );
  return response.data;
};

const Admin = () => {
  const [itemsData, setItemsData] = useState([]);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setItemsData(items);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="admin__title">
      <ItemList
      itemsData={itemsData}
      />
    </div>
  );
};

export default Admin;