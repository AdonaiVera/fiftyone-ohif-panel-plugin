import React from "react";

const OHIFPanel: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <iframe
        src="http://localhost:3000" // Change this URL for production as needed
        style={{ height: "100%", width: "100%", border: "none" }}
      />
    </div>
  );
};

export default OHIFPanel;

