import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // it will run on 1st render
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((res) => {
        setData(res.quotes);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(quote => 
            <li key={quote.id}>{quote.quote}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
