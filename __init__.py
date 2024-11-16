"""OHIF Viewer Panel plugin.

| Copyright 2017-2023, Voxel51, Inc.
| `voxel51.com <https://voxel51.com/>`_
|
"""

import fiftyone.operators as foo
import fiftyone.operators.types as types

class OpenOHIFViewerPanel(foo.Operator):
    @property
    def config(self):
        _config = foo.OperatorConfig(
            name="open_ohif_viewer_panel",
            label="Open OHIF Viewer Panel",
            unlisted=False,
        )
        _config.icon = "/assets/medical-logo.svg"  
        return _config

    def resolve_placement(self, ctx):
        return types.Placement(
            types.Places.SAMPLES_GRID_SECONDARY_ACTIONS,
            types.Button(
                label="Open OHIF Viewer Panel",
                prompt=False,
                icon="/assets/medical-logo.svg", 
            ),
        )

    def execute(self, ctx):
        ctx.trigger(
            "open_panel",
            params=dict(
                name="OHIFViewerPanel", isActive=True, layout="horizontal"
            ),
        )

def register(p):
    p.register(OpenOHIFViewerPanel)
    