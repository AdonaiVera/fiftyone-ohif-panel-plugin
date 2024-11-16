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
      viewBox={`0 0 250 165`}
    >
      <path
        d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
        fill="#fff"
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