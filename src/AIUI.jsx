import React, { useEffect, useState } from 'react';


function AI_UI() {
  const [responses, setResponses] = useState(''); 
  const [link, setLink] = useState([]); // This will store only the responses
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/answer')
      .then(response => response.json())
       .then(data => {  
        setResponses(data); 
        console.log(data)
        console.log(data)
       // Update to store only the response part 
        setLoading(false); // Set loading to false after data is loaded
      })
       // Update to store only the response part
       .catch(error => {
        console.error('Error fetching items:', error);
        setLoading(false); // Ensure loading is false on error too
      });
  }, []);

  return (
    <div > 
      <header > 
      <h1>Responses List</h1> 
        {loading ? ( // Conditional rendering based on loading state
          <p>Loading...</p> // Display loading text if data is still being fetched
        ) : ( 
          <> 
        <p>{responses && responses}</p>  
         
        <ul>
          {responses && responses.map((response, index) => (
            <li key={index}>
              <strong>{response.answer}</strong>
              
            </li>
          ))}
        </ul>
      
        </>
        )}
      </header> 
    </div> 
  );
}

export default AI_UI
