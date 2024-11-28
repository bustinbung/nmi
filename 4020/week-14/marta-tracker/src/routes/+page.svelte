<script lang="ts">
    import Pbf from 'pbf';
    import { readAlert } from '$lib/gtfs-proto-schema';
    import { onMount } from 'svelte';

    onMount(() => {
        try {
            const response = fetch(
                'https://gtfs-rt.itsmarta.com/TMGTFSRealTimeWebService/vehicle/vehiclepositions.pb'
            );

            console.log(response);
        } catch {
            throw new Error('Failed');
        }
    });

    let obj = readAlert(new Pbf());
</script>

<h1>MARTA Real-time Transit Information</h1>
