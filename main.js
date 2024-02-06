// Without Web Workers
document.getElementById('startBtn').addEventListener('click', function() {
    const startTime = performance.now();
    
    // Perform heavy data processing (e.g., sorting a large array)
    const array = Array.from({ length: 1000000 }, () => Math.random());
    array.sort();
  
    const endTime = performance.now();
    const duration = endTime - startTime;
    document.getElementById('result').textContent = `Processing time without Web Workers: ${duration} milliseconds`;
  });

 
  // With Web Workers
  document.getElementById('startBtn').addEventListener('click', function() {
    const startTime = performance.now();
  
    const worker = new Worker('worker.js');
    worker.postMessage({ action: 'processData' });
  
    worker.onmessage = function(event) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      document.getElementById('result').textContent = `Processing time with Web Workers: ${duration} milliseconds`;
    };
  });
  