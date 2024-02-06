// Web Worker script
self.addEventListener('message', function(event) {
    if (event.data.action === 'processData') {
      const startTime = performance.now();
  
      // Perform heavy data processing (e.g., sorting a large array)
      const array = Array.from({ length: 1000000 }, () => Math.random());
      array.sort();
  
      const endTime = performance.now();
      const duration = endTime - startTime;
      self.postMessage({ duration });
    }
  });
  