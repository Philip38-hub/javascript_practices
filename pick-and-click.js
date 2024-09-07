export function pick() {
    // Create the HSL display div
    const hslDisplay = document.createElement('div');
    hslDisplay.className = 'hsl';
    hslDisplay.style.position = 'absolute';
    hslDisplay.style.top = '50%';
    hslDisplay.style.left = '50%';
    hslDisplay.style.transform = 'translate(-50%, -50%)';
    hslDisplay.style.fontSize = '2em';
    document.body.appendChild(hslDisplay);

    // Create the Hue display div
    const hueDisplay = document.createElement('div');
    hueDisplay.className = 'hue';
    hueDisplay.style.position = 'absolute';
    hueDisplay.style.top = '10px';
    hueDisplay.style.right = '10px';
    hueDisplay.style.fontSize = '1.5em';
    document.body.appendChild(hueDisplay);

    // Create the Luminosity display div
    const luminosityDisplay = document.createElement('div');
    luminosityDisplay.className = 'luminosity';
    luminosityDisplay.style.position = 'absolute';
    luminosityDisplay.style.bottom = '10px';
    luminosityDisplay.style.left = '10px';
    luminosityDisplay.style.fontSize = '1.5em';
    document.body.appendChild(luminosityDisplay);

    // Create the SVG for crosshairs
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = 'absolute';
    svg.style.pointerEvents = 'none'; // Prevent mouse events on the SVG
    document.body.appendChild(svg);

    const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineX.setAttribute('id', 'axisX');
    lineX.setAttribute('stroke', 'black');
    lineX.setAttribute('stroke-width', '1');
    svg.appendChild(lineX);

    const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineY.setAttribute('id', 'axisY');
    lineY.setAttribute('stroke', 'black');
    lineY.setAttribute('stroke-width', '1');
    svg.appendChild(lineY);

    // Mouse move event
    document.addEventListener('mousemove', (event) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Calculate hue and luminosity based on mouse position
        const hue = Math.round((event.clientX / width) * 360);
        const luminosity = Math.round((1 - (event.clientY / height)) * 100);

        // Update background color
        document.body.style.backgroundColor = `hsl(${hue}, 100%, ${luminosity}%)`;

        // Update displays
        const hslValue = `hsl(${hue}, 100%, ${luminosity}%)`;
        hslDisplay.textContent = hslValue;
        hueDisplay.textContent = `Hue: ${hue}`;
        luminosityDisplay.textContent = `Luminosity: ${luminosity}`;

        // Update line positions
        lineX.setAttribute('x1', event.clientX);
        lineX.setAttribute('x2', event.clientX);
        lineX.setAttribute('y1', 0);
        lineX.setAttribute('y2', height);

        lineY.setAttribute('y1', event.clientY);
        lineY.setAttribute('y2', event.clientY);
        lineY.setAttribute('x1', 0);
        lineY.setAttribute('x2', width);
    });

    // Mouse click event to copy HSL value to clipboard
    document.addEventListener('click', () => {
        navigator.clipboard.writeText(hslDisplay.textContent)
            .then(() => {
                console.log('HSL value copied to clipboard:', hslDisplay.textContent);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
}
