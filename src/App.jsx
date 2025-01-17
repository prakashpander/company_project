import React, { useState } from "react";
import './Csslogin.css'

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (file) {
      const formData = new FormData();
      formData.append("pdf", file);

    
      console.log("Uploaded file:", file.name);

      alert("File uploaded successfully!");
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <div className="App">
      <h1>Upload PDF</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
