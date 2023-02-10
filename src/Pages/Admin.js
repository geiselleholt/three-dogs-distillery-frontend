import LabelList from "../Components/LabelList.js";
import ItemList from "../Components/ItemList.js";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Admin.css";


const getAllLabelsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/labels`
  );
  return response.data;
};

const getAllItemsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/items`
  );
  return response.data;
};

const Admin = () => {
  const [itemsData, setItemsData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);

  const getAllItems = async () => {
    const items = await getAllItemsApi();
    setItemsData(items);
  };

  const getAllLabels = async () => {
    const labels = await getAllLabelsApi();
    setLabelsData(labels);
  };

  useEffect(() => {
    getAllItems();
    getAllLabels();
  }, []);

  return (
    <div>
      <p className="title">ORDERS</p>
      <ItemList
      itemsData={itemsData}
      />
      <p className="title">LABELS</p>
      <LabelList
      labelsData={labelsData}
      />
    </div>
  );
};

export default Admin;