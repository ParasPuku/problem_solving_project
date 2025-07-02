import { useEffect, useState } from "react";
import axios from "axios";

function FetchApiData() {
  const [realData, setRealData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const endpoint = "https://dummyjson.com/products?limit=10&skip=20";
      const response = await axios.get(endpoint);
      const data = response.data;
      setRealData(data);
    };
    fetchApi();
  }, []);

  return (
    <div className="wrapper">
        <div>----------------------------------</div>
      <div className="api-wrapper-data">API DATA</div>
      <div>----------------------------------</div>
      {realData?.products?.length > 0 && realData?.products.map((product) => (
        <div className="api-data">
            <div className="title">Title: {product.title}</div>
            <div className="description">Description: {product.description}</div>
            <div className="category">Category: {product.category}</div>
            <div className="price">Price: {product.price}</div>
            <div className="warranty">Warranty Info: {product.warrantyInformation}</div>
            <div>----------------------------------</div>
        </div>
      ))}
    </div>
  );
}

export default FetchApiData;
