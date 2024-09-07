export const pick = () => {
    // Create and style the HSL display elements
    const hslDiv = document.createElement('div');
    const hueDiv = document.createElement('div');
    const luminosityDiv = document.createElement('div');
  
    hslDiv.className = 'hsl';
    hueDiv.className = 'hue';
    luminosityDiv.className = 'luminosity';
  
    document.body.appendChild(hslDiv);
    document.body.appendChild(hueDiv);
    document.body.appendChild(luminosityDiv);
  
    // Create and style the SVG container and lines
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none'; // Ensure SVG does not capture mouse events
    document.body.appendChild(svg);
  
    const lineX = document.createElementNS(svgNS, "line");
    const lineY = document.createElementNS(svgNS, "line");
  
    lineX.setAttribute("id", "axisX");
    lineY.setAttribute("id", "axisY");
  
    lineX.setAttribute("stroke", "black");
    lineY.setAttribute("stroke", "black");
    lineX.setAttribute("stroke-width", "1");
    lineY.setAttribute("stroke-width", "1");
  
    svg.appendChild(lineX);
    svg.appendChild(lineY);
  
    // Function to update HSL values and SVG lines based on mouse position
    const updateValues = (event) => {
      const hue = Math.round((event.clientX / window.innerWidth) * 360);
      const luminosity = Math.round((event.clientY / window.innerHeight) * 100);
      const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;
  
      document.body.style.backgroundColor = hslValue;
  
      hslDiv.textContent = `HSL: ${hslValue}`;
      hueDiv.textContent = `Hue: ${hue}`;
      luminosityDiv.textContent = `Luminosity: ${luminosity}`;
  
      lineX.setAttribute('x1', event.clientX);
      lineX.setAttribute('x2', event.clientX);
      lineX.setAttribute('y1', 0);
      lineX.setAttribute('y2', window.innerHeight);
  
      lineY.setAttribute('x1', 0);
      lineY.setAttribute('x2', window.innerWidth);
      lineY.setAttribute('y1', event.clientY);
      lineY.setAttribute('y2', event.clientY);
    };
  
    // Add event listeners for mouse movement and click
    document.addEventListener('mousemove', updateValues);
    
    document.addEventListener('click', () => {
      const hslText = document.querySelector('.hsl').textContent;
      navigator.clipboard.writeText(hslText).then(() => {
        console.log('HSL value copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy HSL value: ', err);
      });
    });
  };
  