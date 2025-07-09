// Import (parts of) Openlayers 9 and reexport them in a ~nested namespace structure similar to Openlayers 4

import {default as Collection} from "ol/Collection";
import {default as Disposable} from "ol/Disposable";
import {default as Feature} from "ol/Feature";
import {default as Geolocation} from "ol/Geolocation";
import {default as Graticule} from "ol/layer/Graticule";
import {default as Image} from "ol/Image";
import {default as ImageCanvas} from "ol/ImageCanvas";
import {default as ImageTile} from "ol/ImageTile";
import {default as Kinetic} from "ol/Kinetic";
import {default as Map} from "ol/Map";
import {default as MapBrowserEvent} from "ol/MapBrowserEvent";
import {default as MapBrowserEventHandler} from "ol/MapBrowserEventHandler";
import {default as MapEvent} from "ol/MapEvent";
import {default as olObject} from "ol/Object";
import {default as Observable} from "ol/Observable";
import {default as Overlay} from "ol/Overlay";
import {default as Tile} from "ol/Tile";
import {default as WebGLVectorTile} from "ol/layer/WebGLVectorTile";
import {default as TileQueue} from "ol/TileQueue";
import {default as TileRange} from "ol/TileRange";
import {default as VectorRenderTile} from "ol/VectorRenderTile";
import {default as VectorTile} from "ol/VectorTile";
import {default as View} from "ol/View";
import {applyStyle as applyMapboxStyle, MapboxVectorLayer as MapboxVector} from "ol-mapbox-style";

import {getUid, VERSION} from "ol/util";

import * as nsCoordinate from "ol/coordinate";
import * as nsControl from "ol/control";

import * as nsExtent from "ol/extent";
import * as nsEvents from "ol/events";
import * as nsEvents_Event from "ol/events/Event";
import * as nsEvents_condition from "ol/events/condition";

import * as nsGeom from "ol/geom";
import * as geom_Polygon from "ol/geom/Polygon";
import * as nsLoadingStrategy from 'ol/loadingstrategy';
// namespace "format": cherry-pick classes; skip, particularly, broken MVT format (imports don't work)
import {
    GeoJSON as format_GeoJSON,
    GML as format_GML,
    KML as format_KML,
    WFS as format_WFS,
    WKT as format_WKT,
    EsriJSON as format_EsriJSON,
    GPX as format_GPX,
    IGC as format_IGC,
    IIIFInfo as format_IIIFInfo,
    MVT as format_MVT,
    OWS as format_OWS,
    Polyline as format_Polyline,
    TopoJSON as format_TopoJSON,
    WKB as format_WKB,
    WMSCapabilities as format_WMSCapabilities,
    WMSGetFeatureInfo as format_WMSGetFeatureInfo,
    WMTSCapabilities as format_WMTSCapabilities,
} from "ol/format";
import format_GML2 from "ol/format/GML2";
import format_GML3 from "ol/format/GML3";
import format_GML32 from "ol/format/GML32";
import * as nsFormat_filter from "ol/format/filter";

import * as interaction0 from "ol/interaction";
import {createBox as interaction_Draw_createBox} from "ol/interaction/Draw";
import {getRequestUrl} from "ol/source/wms";
import * as nsLayer from "ol/layer";
import * as proj0 from "ol/proj";
import * as proj_proj4 from "ol/proj/proj4";
import * as nsSource from "ol/source";
import * as nsSphere from "ol/sphere";
import * as style0 from "ol/style";
import {createDefaultStyle as style_Style_createDefaultStyle} from "ol/style/Style";
import {createEditingStyle as style_Style_createEditingStyle} from "ol/style/Style";
import * as style_expressions from "ol/expr/expression";
import {default as tileGrid_WMTS} from "ol/tilegrid/WMTS";
import {toContext} from "ol/render";

const nsInteraction = {};
Object.assign(nsInteraction, interaction0);
nsInteraction.Draw.createBox = interaction_Draw_createBox;

const nsProj = {};
Object.assign(nsProj, proj0, {
    proj4: proj_proj4
});

const nsStyle = {};
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


const ol = {
    // top-level classes
    Collection: Collection,
    Disposable: Disposable,
    Feature: Feature,
    Geolocation: Geolocation,
    Graticule: Graticule,
    Image: Image,
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
    Tile: Tile,
    TileQueue: TileQueue,
    TileRange: TileRange,
    VectorRenderTile: VectorRenderTile,
    VectorTile: VectorTile,
    WebGLVectorTile: WebGLVectorTile,
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
        GML2: format_GML2,
        GML3: format_GML3,
        GML32: format_GML32,
        KML: format_KML,
        WFS: format_WFS,
        WKT: format_WKT,
        EsriJSON: format_EsriJSON,
        GPX: format_GPX,
        IGC: format_IGC,
        IIIFInfo: format_IIIFInfo,
        MVT: format_MVT,
        OWS: format_OWS,
        Polyline: format_Polyline,
        TopoJSON: format_TopoJSON,
        WKB: format_WKB,
        WMSCapabilities: format_WMSCapabilities,
        WMSGetFeatureInfo: format_WMSGetFeatureInfo,
        WMTSCapabilities: format_WMTSCapabilities,
        filter: nsFormat_filter
    },
    geom: Object.assign({}, nsGeom, {
        Polygon: geom_Polygon
    }),
    interaction: nsInteraction,
    layer: {
        ...nsLayer,
        WebGLVectorTile: WebGLVectorTile,
        MapboxVector: MapboxVector,
    },
    proj: nsProj,
    source: nsSource,
    sphere: nsSphere,
    style: nsStyle,
    render: {
      toContext: toContext,
    },
    tilegrid: {
        WMTS: tileGrid_WMTS
    },
    loadingstrategy: nsLoadingStrategy,
    util: {
        getRequestUrl: getRequestUrl,
        applyMapboxStyle: applyMapboxStyle
    }
};
// dirty solution?
if (window.ol) {
    window.console.error('"ol" already exists');
} else {
    window.ol = ol;
}

// noinspection JSUnusedGlobalSymbols: default export is used by rollup
export default ol;
