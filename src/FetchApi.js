import React, { useState, useEffect } from 'react';

const FetchApi = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {apiData ? (
                <div>
                    {apiData.map((item) => (
                        <div className="item" key={item.id}>
                            <p>Title: {item.title}</p>
                            <p>Body: {item.body}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
};
export default FetchApi;
