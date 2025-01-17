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
      // Create a new FormData object
      const formData = new FormData();
      formData.append("pdf", file);

      // Here we are just logging the file name for demonstration
      // You can do further processing like storing in localStorage
      console.log("Uploaded file:", file.name);

      // Show success message
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
