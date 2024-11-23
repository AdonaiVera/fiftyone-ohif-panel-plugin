import { PluginComponentType, registerComponent } from "@fiftyone/plugins";
import styled from "styled-components";

// Styled Container
const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

// Styled Iframe
const ViewerIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;

// OHIF Viewer Panel Component
export function OHIFViewerPanel() {
    const handleLoad = () => {
        console.log("OHIF Viewer loaded successfully!");
    };

    const handleError = () => {
        console.error("Failed to load OHIF Viewer.");
    };

    return (
        <Container>
            <ViewerIframe
                src="http://localhost:3000/localbasic"
                title="OHIF Viewer"
                onLoad={handleLoad}
                onError={handleError}
            />
        </Container>
    );
}

// Register the Component
registerComponent({
    name: "OHIFViewerPanel",
    label: "OHIF Viewer Panel",
    component: OHIFViewerPanel,
    type: PluginComponentType.Panel,
});
