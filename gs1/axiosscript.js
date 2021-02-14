document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest() {
//  console.log("Button Clicked")
//  config = {
//   method: 'get',
//   url: 'data.txt'
//  }
//  const promiseObj = axios(config)
//  promiseObj.then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  config = {
//   method: 'get',
//   url: 'data.txt'
//  }
//  axios(config).then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  axios({
//   method: 'get',
//   url: 'data.txt'
//  }).then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  axios.get('data.txt').then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  axios('data.txt').then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  axios.get('data.txt', { 'method': 'get' }).then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// function makerequest() {
//  console.log("Button Clicked")
//  config = {
//   'method': 'get'
//  }
//  axios.get('data.txt', config).then((res) => {
//   console.log(res)
//   console.log(res.data)
//  })
// }

// Promise Then | Error Handling
// function makerequest() {
//  console.log("Button Clicked")
//  axios.get('data.txt').then((res) => {
//   console.log(res)
//   console.log(res.data)
//  }).catch((error) => {
//   console.log(error)
//  }).then(() => {
//   console.log("Clean")
//  })
// }

// Promise Then | Showing Data in Browser
// function makerequest() {
//  console.log("Button Clicked")
//  axios.get('data.txt').then((res) => {
//   console.log(res)
//   console.log(res.data)
//   document.getElementById("divdata").innerText = res.data
//  }).catch((error) => {
//   console.log(error)
//  })
// }

// Async and Await
// async function makerequest() {
//  console.log("Button Clicked")
//  config = {
//   method: 'get',
//   url: 'data.txt'
//  }
//  const res = await axios(config)
//  console.log(res)
//  console.log(res.data)
// }

// async function makerequest() {
//  console.log("Button Clicked")
//  config = {
//   method: 'get',
//  }
//  const res = await axios('data.txt', config)
//  console.log(res)
//  console.log(res.data)
// }

// async function makerequest() {
//  console.log("Button Clicked")
//  const res = await axios.get('data.txt')
//  console.log(res)
//  console.log(res.data)
// }

// Async and AWait | Error Handling
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await axios.get('data1.txt')
//   console.log(res)
//   console.log(res.data)
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and AWait | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await axios.get('data.txt')
//   console.log(res)
//   console.log(res.data)
//   document.getElementById("divdata").innerText = res.data
//  } catch (error) {
//   console.log(error)
//  }
// }