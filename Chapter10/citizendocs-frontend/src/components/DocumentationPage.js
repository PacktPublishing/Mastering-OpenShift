import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DocumentationPage = () => {
  const { username } = useParams();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/documents/${username}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched documents:', data);
        setDocuments(data);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });
  }, [username]);

  return (
    <div>
      <h2>Welcome {username}</h2>
      <h3>Personal Documents Status</h3>
      <ul className="list-group">
        {documents.map(doc => (
          <li className="list-group-item" key={doc.id}>
            {doc.documentType}: {doc.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentationPage;
