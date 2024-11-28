<script lang=ts>
    /* Modified from https://github.com/Wildsong/svelte-maps/ */

    import Map from 'ol/Map'
    import View from 'ol/View'
    import TileLayer from 'ol/layer/Tile'
    import OSM from 'ol/source/OSM.js'
    import { fromLonLat } from 'ol/proj'
    import 'ol/ol.css';

    let { center, zoom } = $props();

    const mapDivId = 'map';
    let map = null;

    function setup(node, _id) {
        const osmLayer = new TileLayer({
            source: new OSM()
        });

        map = new Map({
            target: _id,
            layers: [osmLayer],
            view: new View({
                center: fromLonLat(center),
                zoom
            })
        })

        return destroy() {
            
        }
    }
</script>

<div id={mapDivId}></div>

<style>
    #map {
        width: 1000px;
        height: 800px;
    }
</style>