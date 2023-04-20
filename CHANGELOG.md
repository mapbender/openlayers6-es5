## 7.3.0.0
* Update to [Openlayers 7.3.0](https://github.com/openlayers/openlayers/releases/tag/v7.3.0)

Please see [Openlayers 7.0.0 release notes](https://github.com/openlayers/openlayers/releases/tag/v7.0.0) for BC breaks.

## 0.15.1.0 + 6.15.1.0
* Update to [Openlayers 6.15.1](https://github.com/openlayers/openlayers/releases/tag/v6.15.1)

Please see upgrading notes on upstream [v6.15.0](https://github.com/openlayers/openlayers/releases/tag/v6.15.0) release.

## 0.14.1.0 + 6.14.1.0
* Update to [Openlayers 6.14.1](https://github.com/openlayers/openlayers/releases/tag/v6.14.1)

Please see upgrading notes on upstream [v6.5.0](https://github.com/openlayers/openlayers/releases/tag/v6.5.0) and [v6.6.0](https://github.com/openlayers/openlayers/releases/tag/v6.6.0) releases.

## 0.4.3.2 + 6.4.3.2
* Drop webpack; switch to rollup build to fix missing "internal" properties in minified build
* Drop separate `dev` task, build minified / debug output in a single npm task (`build`)

## 0.4.3.1
* Add `ol.format.filter` sub-namespace for WFS support ([PR#2](https://github.com/mapbender/openlayers6-es5/pull/2))
* Misc minor package updates for security audit

## 0.4.3
* Update to [Openlayers 6.4.3](https://github.com/openlayers/openlayers/releases/tag/v6.4.3)

## 0.3.5
* Add `ol.events.Event` sub-namespace; contained symbols:
  * `ol.events.Event.BaseEvent`
  * `ol.events.Event.preventDefault`
  * `ol.events.Event.stopPropagation`

## 0.3.4
* Add ol.loadingstrategy ([PR#1](https://github.com/mapbender/openlayers6-es5/pull/1))

## 0.3.3
* Add ol.events and ol.events.condition sub-namespaces

## 0.3.2
* Add ol.tilegrid.WMTS

## 0.3.1
* Add Polygon factory methods (fromExtent etc) under ol.geom.Polygon
