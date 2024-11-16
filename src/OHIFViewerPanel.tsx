import { useState } from "react";
import { registerComponent, PluginComponentType } from "@fiftyone/plugins";
import { Box, Typography, TextField, Button } from "@mui/material";

export const OHIFIcon = ({ size = "1rem", style = {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      style={style}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#007BFF"
      />
    </svg>
  );
};

export default function OHIFViewerPanel() {
  // Default OHIF Viewer URL
  const [ohifUrl, setOhifUrl] = useState("https://viewer.ohif.org");
  const [dicomPath, setDicomPath] = useState("");
  const [viewerUrl, setViewerUrl] = useState(ohifUrl);

  const handleDicomPathChange = (event) => {
    setDicomPath(event.target.value);
  };

  const loadViewer = () => {
    console.log("Button clicked!");
    if (dicomPath) {
      // Append the DICOM StudyInstanceUID as a query parameter
      setViewerUrl(`${ohifUrl}?StudyInstanceUID=${encodeURIComponent(dicomPath)}`);
    } else {
      setViewerUrl(ohifUrl); // Fallback to the default viewer URL
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h6">OHIF Viewer Panel</Typography>

      <TextField
        label="DICOM Study Instance UID"
        variant="outlined"
        fullWidth
        value={dicomPath}
        onChange={handleDicomPathChange}
        style={{ marginBottom: "20px", maxWidth: "600px" }}
        placeholder="Enter StudyInstanceUID or leave blank to load viewer"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={loadViewer}
        style={{ marginBottom: "20px" }}
      >
        Load DICOM Viewer
      </Button>

      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <iframe
          src={viewerUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="OHIF Viewer"
        />
      </div>
    </Box>
  );
}

registerComponent({
  name: "OHIFViewerPanel",
  label: "OHIF Viewer",
  component: OHIFViewerPanel,
  type: PluginComponentType.Panel,
  Icon: () => <OHIFIcon size={"1rem"} style={{ marginRight: "0.5rem" }} />,
});