async function fetchDataAndDisplay() {
    try {
        // Fetch data from your Netlify Function endpoint
        const response = await fetch('/.netlify/functions/fetch-data');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        const container = document.getElementById('data-container');
        container.innerHTML = ''; // Clear previous content

        if (data.length > 0) {
            data.forEach(row => {
                const item = document.createElement('div');
                item.textContent = JSON.stringify(row); // Display the data
                container.appendChild(item);
            });
        } else {
            container.textContent = 'No data found.';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('data-container').textContent = 'Failed to load data.';
    }
}

fetchDataAndDisplay();