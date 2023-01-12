// Import (parts of) Openlayers 6 and reexport them in a ~nested namespace structure similar to Openlayers 4

import {default as AssertionError} from "ol/AssertionError.js";
import {default as Collection} from "ol/Collection.js";
import {default as Disposable} from "ol/Disposable.js";
import {default as Feature} from "ol/Feature.js";
import {default as Geolocation} from "ol/Geolocation.js";
import {default as Graticule} from "ol/layer/Graticule.js";
import {default as Image} from "ol/Image.js";
import {default as ImageBase} from "ol/ImageBase.js";
import {default as ImageCanvas} from "ol/ImageCanvas.js";
import {default as ImageTile} from "ol/ImageTile.js";
import {default as Kinetic} from "ol/Kinetic.js";
import {default as Map} from "ol/Map.js";
import {default as MapBrowserEvent} from "ol/MapBrowserEvent.js";
import {default as MapBrowserEventHandler} from "ol/MapBrowserEventHandler.js";
import {default as MapEvent} from "ol/MapEvent.js";
import {default as olObject} from "ol/Object.js";
import {default as Observable} from "ol/Observable.js";
import {default as Overlay} from "ol/Overlay.js";
import {default as Tile} from "ol/Tile.js";
import {default as TileCache} from "ol/TileCache.js";
import {default as TileQueue} from "ol/TileQueue.js";
import {default as TileRange} from "ol/TileRange.js";
import {default as VectorRenderTile} from "ol/VectorRenderTile.js";
import {default as VectorTile} from "ol/VectorTile.js";
import {default as View} from "ol/View.js";

// @todo: imported VERSION is always "latest". Substitute with a proper version number
import {getUid, VERSION} from "ol/util.js";

import * as nsCoordinate from "ol/coordinate.js";
import * as nsControl from "ol/control.js";

import * as nsExtent from "ol/extent.js";
import * as nsEvents from "ol/events.js";
import * as nsEvents_Event from "ol/events/Event.js";
import * as nsEvents_condition from "ol/events/condition.js";

import * as nsGeom from "ol/geom.js";
import * as geom_Polygon from "ol/geom/Polygon.js";
import * as nsLoadingstrategy from 'ol/loadingstrategy';
// namespace "format": cherry-pick classes; skip, particularly, broken MVT format (imports don't work)
import {
    GeoJSON as format_GeoJSON,
    GML as format_GML,
    KML as format_KML,
    WFS as format_WFS,
    WKT as format_WKT
} from "ol/format.js";
import * as nsFormat_filter from "ol/format/filter.js";

import * as interaction0 from "ol/interaction.js";
import {createBox as interaction_Draw_createBox} from "ol/interaction/Draw.js";
import * as nsLayer from "ol/layer.js";
import * as proj0 from "ol/proj.js";
import * as proj_proj4 from "ol/proj/proj4.js";
import * as nsSource from "ol/source.js";
import * as nsSphere from "ol/sphere.js";
import * as style0 from "ol/style.js";
import {createDefaultStyle as style_Style_createDefaultStyle} from "ol/style/Style.js";
import {createEditingStyle as style_Style_createEditingStyle} from "ol/style/Style.js";
import * as style_expressions from "ol/style/expressions.js";
import {default as tilegrid_WMTS} from "ol/tilegrid/WMTS.js";

var nsInteraction = {};
Object.assign(nsInteraction, interaction0);
nsInteraction.Draw.createBox = interaction_Draw_createBox;

var nsProj = {};
Object.assign(nsProj, proj0, {
    proj4: proj_proj4
});

var nsStyle = {};
Object.assign(nsStyle, style0, {
    expressions: style_expressions,
    IconAnchorUnits: {
        /**
         * This changed from a separate module to a simple typedef
         * @see https://github.com/openlayers/openlayers/blob/v6.15.1/src/ol/style/IconAnchorUnits.js
         * @see https://github.com/openlayers/openlayers/blob/v7.2.2/src/ol/style/Icon.js#L13
         */
        FRACTION: 'fraction',
        PIXELS: 'pixels'
    },
    IconOrigin: {
        /**
         * This changed from a separate module to a simple typedef
         * @see https://github.com/openlayers/openlayers/blob/v6.15.1/src/ol/style/IconOrigin.js
         * @see https://github.com/openlayers/openlayers/blob/v7.2.2/src/ol/style/Icon.js#L18
         */
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right'
    },
    TextPlacement: {
        /**
         * This changed from a separate module to a simple typedef
         * @see https://github.com/openlayers/openlayers/blob/v6.15.1/src/ol/style/TextPlacement.js
         * @see https://github.com/openlayers/openlayers/blob/v7.2.2/src/ol/style/Text.js#L8
         */
        POINT: 'point',
        LINE: 'line'
    }
});
Object.assign(nsStyle.Style, {
    createDefaultStyle: style_Style_createDefaultStyle,
    createEditingStyle: style_Style_createEditingStyle
});


var ol = {
    // top-level classes
    AssertionError: AssertionError,
    Collection: Collection,
    Disposable: Disposable,
    Feature: Feature,
    Geolocation: Geolocation,
    Graticule: Graticule,
    Image: Image,
    ImageBase: ImageBase,
    ImageCanvas: ImageCanvas,
    ImageTile: ImageTile,
    Kinetic: Kinetic,
    Map: Map,
    MapBrowserEvent: MapBrowserEvent,
    MapBrowserEventHandler: MapBrowserEventHandler,
    MapEvent: MapEvent,
    Object: olObject,
    Observable: Observable,
    Overlay: Overlay,
    PluggableMap: Map,      /** Legacy alias; no longer defined in Openlayers 7 */
    Tile: Tile,
    TileCache: TileCache,
    TileQueue: TileQueue,
    TileRange: TileRange,
    VectorRenderTile: VectorRenderTile,
    VectorTile: VectorTile,
    View: View,
    // globals (from util)
    getUid: getUid,
    VERSION: VERSION,
    // sub-namespaces
    coordinate: nsCoordinate,
    control: nsControl,
    events: Object.assign({}, nsEvents, {
        Event: Object.assign({}, nsEvents_Event, {
            BaseEvent: nsEvents_Event.default,
            stopPropagation: nsEvents_Event.stopPropagation,
            preventDefault: nsEvents_Event.preventDefault
        }),
        condition: nsEvents_condition
    }),
    extent: nsExtent,
    format: {
        GeoJSON: format_GeoJSON,
        GML: format_GML,
        KML: format_KML,
        WFS: format_WFS,
        WKT: format_WKT,
        filter: nsFormat_filter
    },
    geom: Object.assign({}, nsGeom, {
        Polygon: geom_Polygon
    }),
    interaction: nsInteraction,
    layer: nsLayer,
    proj: nsProj,
    source: nsSource,
    sphere: nsSphere,
    style: nsStyle,
    tilegrid: {
        WMTS: tilegrid_WMTS
    },
	loadingstrategy: nsLoadingstrategy
};
// dirty solution?
if (window.ol) {
    window.console.error('"ol" already exists');
} else {
    window.ol = ol;
}

export default ol;
