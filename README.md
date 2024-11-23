# OHIF Viewer Panel Plugin 🎒

This plugin allows you to visualize DICOM images using the OHIF Viewer directly within the FiftyOne App. Seamlessly integrate medical imaging workflows into FiftyOne!

![ct_images-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/6b73d010-81af-4ef3-bd2d-eea3b07cc143)

---

## Usage

With this plugin, users can:
- View DICOM images.
- Utilize advanced medical imaging tools for enhanced visualization.

---

## Installation

1. Download the plugin:
   ```shell
   fiftyone plugins download https://github.com/AdonaiVera/fiftyone-ohif-panel-plugin
   ```

2. Refer to the [main FiftyOne Plugins README](https://github.com/voxel51/fiftyone-plugins) for guidance on managing plugins and developing locally.

---

## Operators

### `open_ohif_viewer_panel`

The `open_ohif_viewer_panel` operator allows you to open the OHIF Viewer. You can:
- Load a single image.
- Load an entire folder of DICOM images.

---

## Additional Requirements

To set up the OHIF Viewer, ensure the following:

- **Yarn:** Version 1.17.3+
- **Node.js:** Version 18+
- **Yarn Workspaces:** Enabled on your machine:
  ```shell
  yarn config set workspaces-experimental true
  ```

### OHIF Viewer Setup

1. Clone the [OHIF Viewer Repository](https://github.com/OHIF/Viewers).

2. Install dependencies:
   ```shell
   yarn install
   ```

3. Start the viewer:
   ```shell
   yarn start
   ```

   This will launch the viewer at `http://localhost:3000`, which will be used with the FiftyOne plugin.

---

## Roadmap 

### Phase 1: Basic OHIF Panel ✅ 
- Embed the OHIF Viewer as a panel in FiftyOne.
- Display hardcoded DICOM images.

### Phase 2: Dynamic Dataset Loading  🔧
- Create a data pipeline to share datasets between FiftyOne and OHIF.
- Map FiftyOne datasets to OHIF-compatible formats.

### Phase 3: Advanced Features 🔧
- Add interactivity (annotations, measurements).
- Sync annotations between OHIF and FiftyOne.
- Algorithm to segment.
