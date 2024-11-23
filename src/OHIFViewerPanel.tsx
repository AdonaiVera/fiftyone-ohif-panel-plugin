import { PluginComponentType, registerComponent } from "@fiftyone/plugins";
import { Button } from "@fiftyone/components";
import styled from "styled-components";

// Styled Container
const Container = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
`;

// OHIF Viewer Panel Component
export function OHIFViewerPanel() {
    const openOHIFViewer = () => {
        const viewerUrl = "https://viewer.ohif.org/";
        const viewerWindow = window.open(
            viewerUrl,
            "OHIFViewer",
            "width=1200,height=800,resizable,scrollbars"
        );

        if (!viewerWindow) {
            alert("Unable to open the OHIF Viewer. Please check your browser settings.");
        }
    };

    return (
        <Container>
            <h3>OHIF Viewer Panel</h3>
            <Button onClick={openOHIFViewer} style={{ width: "200px" }}>
                Open OHIF Viewer
            </Button>
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
