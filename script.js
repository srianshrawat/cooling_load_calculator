function calculateCoolingLoad() {
    const area = parseFloat(document.getElementById('area').value);
    const occupants = parseInt(document.getElementById('occupants').value);
    const buildingType = document.getElementById('building-type').value;
    const outdoorTemp = parseFloat(document.getElementById('outdoor-temp').value);
    const indoorTemp = parseFloat(document.getElementById('indoor-temp').value);

    let coolingLoad;
    if (buildingType === 'residential') {
        coolingLoad = 100 * occupants;
    } else if (buildingType === 'commercial') {
        coolingLoad = 150 * occupants;
    } else {
        coolingLoad = 0;
    }

    const U = 30; // Overall heat transfer coefficient (W/m2°C)
    const qConduction = U * area * (outdoorTemp - indoorTemp);
    const sensibleCoolingLoad = qConduction + coolingLoad;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Sensible Cooling Load: ${sensibleCoolingLoad.toFixed(2)} W`;
}
