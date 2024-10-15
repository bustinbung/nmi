// set request URL
const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=mR4RU2dwZveSekd1cQAWaYawwBdwBk5Fa2mgkUhp"

// make new request to url
fetch(url)
    // raw http response
    .then(response => {
        if (response.ok == false) {
            throw new Error(`Response not OK! Status: ${response.status}`)
        }

        return response.json();
    })
    // expecting json by this point
    .then(data => {
        const neo = data.near_earth_objects;

        for (const object of neo) {
            const scale = 8;
            const maxWidth = object.estimated_diameter.kilometers.estimated_diameter_max * scale;
            const minWidth = object.estimated_diameter.kilometers.estimated_diameter_min * scale;

            let color = 'black';
            let innerColor = 'gray';
            
            if (object.is_potentially_hazardous_asteroid == true) {
                color = 'red';
                innerColor = 'tomato'
            }

            const asteroidDiv = document.createElement('div');
            // should really be set in CSS file, but for sake of exercise...
            const styles = {
                width: `${maxWidth}px`,
                height: `${maxWidth}px`,
                backgroundColor: color,
                borderRadius: '50%',
                float: 'left',
                margin: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            };

            // clunky, but only way to style the ::after pseudo element
            asteroidDiv.style.setProperty('--min-width', `${minWidth}px`);
            asteroidDiv.style.setProperty('--inner-color', innerColor);

            // same as using .style.<property> = <value>,  but streamlined
            Object.assign(asteroidDiv.style, styles);

            document.querySelector('#asteroid-list').appendChild(asteroidDiv);
        }
    })
    .catch(error => {
        console.error(`Error while fetching: ${error}`)
    })