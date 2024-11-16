## OHIF Viewer Panel Plugin

# Pending to add images.
![OHIF Viewer](https://user-images.githubusercontent.com/path-to-your-image)

This plugin allows you to visualize DICOM images using the OHIF Viewer directly within the FiftyOne App. Seamlessly integrate medical imaging workflows into FiftyOne!

---

## Usage

The plugin integrates the OHIF Viewer into FiftyOne, enabling users to:
- View DICOM images.
- Enhance visualization with advanced medical imaging tools.
- Load datasets dynamically from FiftyOne into the OHIF Viewer.

---

## Installation

```shell
fiftyone plugins download https://github.com/AdonaiVera/fiftyone-ohif-panel-plugin
```

Refer to the [main FiftyOne Plugins README](https://github.com/voxel51/fiftyone-plugins) for more information about managing downloaded plugins and developing plugins locally.

---

## Operators

### `open_ohif_viewer_panel`

- Opens the OHIF Viewer panel on click.

There are three ways to execute this operator:

1. Press the OHIF Viewer button in the Sample Actions Menu:
![open_option1](https://user-images.githubusercontent.com/path-to-image)

2. Click on the `+` icon next to the `Samples` tab and select `OHIF Viewer` from the dropdown menu:
![open_option2](https://user-images.githubusercontent.com/path-to-image)

3. Press "`" to pull up your list of operators, and select `open_ohif_viewer_panel`:
![open_option3](https://user-images.githubusercontent.com/path-to-image)

---

## Watch a Demo
[![Video Thumbnail](https://img.youtube.com/vi/your-video-id/0.jpg)](https://www.youtube.com/watch?v=your-video-id)

---

## Roadmap

### **Phase 1:** Basic Panel with OHIF Viewer
- Embed OHIF Viewer as a panel in FiftyOne.
- Load and display hardcoded DICOM images.

### **Phase 2:** Dataset Sync Between FiftyOne and OHIF
- Enable dynamic dataset sharing between FiftyOne and OHIF.

### **Phase 3:** Advanced Features
- Add annotations, measurement tools, and advanced visualization features.
- Sync annotations between FiftyOne and OHIF Viewer.

### **Phase 4:** Community Contributions
- Gather feedback and contributions to enhance the plugin's capabilities.

---

## Development Steps

### **Step 1: Environment Setup**
- Set up local development environments for FiftyOne and OHIF Viewer.
- Clone the FiftyOne and OHIF repositories for reference.

### **Step 2: Build a Minimal OHIF Panel**
- Use FiftyOne’s plugin API to embed a static version of the OHIF viewer.
- Display a hardcoded DICOM image.

### **Step 3: Enable Dataset Integration**
- Create a data pipeline to share datasets between FiftyOne and OHIF Viewer.
- Map FiftyOne dataset formats to OHIF-compatible formats.

### **Step 4: Add Interactivity**
- Sync actions between OHIF Viewer (e.g., annotations, selections) and FiftyOne.

### **Step 5: Test and Optimize**
- Test the plugin across datasets and use cases.
- Optimize for performance and user experience.

### **Step 6: Documentation**
- Write clear setup instructions and usage guides.
- Add FAQs and troubleshooting tips.

### **Step 7: Publish the Plugin**
- Create the GitHub repo and populate it with code, docs, and issue templates.