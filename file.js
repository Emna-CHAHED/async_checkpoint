// Async function that iterates through the array and logs each value with a 1-second delay
const iterateAsyncFunc = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // Wait for 1 second before logging the value
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(arr[i]);
    }
  };
  
  // Example usage:
  const values = ['apple', 'banana', 'cherry', 'date'];
  iterateAsyncFunc(values);

  

  // Simulating an API call with a delay using a Promise
function fetchDataFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched from the API!");
        }, 2000); // Simulate a 2-second delay
    });
}

// Async function that waits for the API call to finish
async function awaitCall() {
    console.log("Fetching data...");
    const data = await fetchDataFromAPI(); // Await the data from the API
    console.log(data); // Log the data once it's fetched
}

awaitCall(); // Call the async function

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Randomly simulate success or failure
        setTimeout(() => {
            if (success) {
                resolve("Data fetched from the API!");
            } else {
                reject("Failed to fetch data from the API.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Async function that handles errors gracefully
async function awaitCall() {
    try {
        console.log("Fetching data...");
        const data = await fetchDataFromAPI(); // Await the data from the API
        console.log(data); // Log the data once it's fetched
    } catch (error) {
        console.error("Oops! Something went wrong:", error); // Log a user-friendly error message
    }
}

awaitCall(); // Call the async function
