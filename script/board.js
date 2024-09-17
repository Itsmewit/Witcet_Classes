        // Fetching the external file and inserting content into the notice list
        fetch('points.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('notice-list').innerHTML = data;
            })
            .catch(error => console.error('Error fetching the points:', error));