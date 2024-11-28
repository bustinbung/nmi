// protobuffer library
import Pbf from 'pbf';
// from pbf, generated at build time
import { readFeedMessage } from '$lib/scripts/gtfs-proto-schema';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from "@sveltejs/kit";

// returns data from MARTA as JSON object
export const GET: RequestHandler = async () => {
    let obj;

    try {
        const response = await fetch(
            `https://gtfs-rt.itsmarta.com/TMGTFSRealTimeWebService/vehicle/vehiclepositions.pb`
        );

        if (response.ok != true) {
            throw new Error(`Fetch error! Status: ${response.status}`);
        }

        // because protobuffer is binary stream, convert body to arrayBuffer
        const buffer = await response.arrayBuffer();
        const pbf = new Pbf(buffer);

        // runs exported schema function on pbf buffer
        obj = readFeedMessage(pbf);
    } catch (error) {
        console.error(error);
    }

    return json(obj);
}