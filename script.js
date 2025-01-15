// Map switcher
loc221B = document.getElementById('location_221B');
loc4PrivetDrive = document.getElementById('location_4PrivetDrive');
loc12GrimmauldPlace = document.getElementById('location_12GrimmauldPlace');

iframeContainer221B = document.getElementById('iframe-container-221B');
iframeContainer4PrivetDrive = document.getElementById('iframe-container-4PrivetDrive');
iframeContainer12GrimmauldPlace = document.getElementById('iframe-container-12GrimmauldPlace');

loc221B.addEventListener('click', function () {
    changeMap('221B');
});

loc4PrivetDrive.addEventListener('click', function () {
    changeMap('4PrivetDrive');
});

loc12GrimmauldPlace.addEventListener('click', function () {
    changeMap('12GrimmauldPlace');
});

function changeMap(location) {
    switch (location) {
        case '221B':
            iframeContainer4PrivetDrive.classList.remove('shown');
            iframeContainer4PrivetDrive.classList.add('hidden');
            loc4PrivetDrive.classList.remove('location-buttons-active');

            iframeContainer12GrimmauldPlace.classList.remove('shown');
            iframeContainer12GrimmauldPlace.classList.add('hidden');
            loc12GrimmauldPlace.classList.remove('location-buttons-active');

            iframeContainer221B.classList.remove('hidden');
            iframeContainer221B.classList.add('shown');
            loc221B.classList.add('location-buttons-active');
           
            console.log('Changing map to 221B');
            break;
        case '4PrivetDrive':
            iframeContainer221B.classList.remove('shown');
            iframeContainer221B.classList.add('hidden');
            loc221B.classList.remove('location-buttons-active');

            iframeContainer12GrimmauldPlace.classList.remove('shown');
            iframeContainer12GrimmauldPlace.classList.add('hidden');
            loc12GrimmauldPlace.classList.remove('location-buttons-active');

            iframeContainer4PrivetDrive.classList.remove('hidden');
            iframeContainer4PrivetDrive.classList.add('shown');
            loc4PrivetDrive.classList.add('location-buttons-active');

            
            console.log('Changing map to 4 Privet Drive');
            break;
        case '12GrimmauldPlace':
            iframeContainer221B.classList.remove('shown');
            iframeContainer221B.classList.add('hidden');
            loc221B.classList.remove('location-buttons-active');

            iframeContainer4PrivetDrive.classList.remove('shown');
            iframeContainer4PrivetDrive.classList.add('hidden');
            loc4PrivetDrive.classList.remove('location-buttons-active');

            iframeContainer12GrimmauldPlace.classList.remove('hidden');
            iframeContainer12GrimmauldPlace.classList.add('shown');
            loc12GrimmauldPlace.classList.add('location-buttons-active');

            console.log('Changing map to 12 Grimmauld Place');
            break;
    }
}
