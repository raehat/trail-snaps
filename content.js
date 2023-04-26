function fetchData() {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        alert(`Data: ${JSON.stringify(data)}`);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  setInterval(fetchData, 15000);
  