<script lang="ts">
    import { onMount } from 'svelte';
    import { format, fromUnixTime } from 'date-fns';

    import Map from '$lib/components/Map.svelte';

    const center = [33.7820, -84.4495];
    const zoom = 10.5;

    let time = $state(new Date());

    onMount(async () => {
        try {
            const response = await fetch('/api/vehicles');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    });
</script>

<h1>MARTA Real-time Transit Information</h1>
<p>Timestamp: {format(time, 'MM/dd/yyyy HH:mm')}</p>
<Map {center} {zoom}/>