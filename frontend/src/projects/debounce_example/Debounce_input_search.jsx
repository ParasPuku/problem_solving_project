import React, { useState } from "react";
// import { debounce } from "../custom_hooks/debounce";
import "./Debounce_input_search.css";
import { useDebounce } from "../custom_hooks/useDebounce";
const Debounce_input_search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUsersFound, setIsUsersFound] = useState(false);
  const [query, setQuery] = useState("");
  const fetchData = async (query) => {
    if (!query.trim()) {
      setData(null);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?q=${query}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setData(data);
      if (data?.length > 0) {
        setIsUsersFound(true);
      } else {
        setIsUsersFound(false);
      }
      console.log("DATAAATAA", data);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useDebounce((query) => {
    fetchData(query);
  }, 500);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    debouncedSearch(value.toLowerCase());
  };
  return (
    <div className="input-search-wrapper">
      <div className="input-search">
        <div>DEBOUNCE EXAMPLE</div>
        <div className="search-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search email here"
            onChange={handleChange}
            className="search-area"
            name="search"
          />
          {loading && <div>Loading...</div>}
          {error && <div className="error">Error: {error}</div>}
          <div className="search-results">
            {data?.map((item) => (
              <div className="result-wrapper" key={item.id}>
                <div className="user user-email">
                  <div className="email">Email</div>
                  <div>{item.email}</div>
                </div>
                <div className="user user-name">
                  <div className="name">Name</div>
                  <div>{item.name}</div>
                </div>
                <div className="user user-item">
                  <div className="body">Body</div>
                  <div>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
          {!isUsersFound && <div className="">Searched User Not Found!!!</div>}
        </div>
      </div>
    </div>
  );
};

export default Debounce_input_search;
