document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then
function makerequest() {
 console.log("Button Clicked")
 const config = {
  method: 'POST',
  url: 'https://reqres.in/api/users',
  headers: {
   'Content-Type': 'application/json'
  },
  data: '{"name":"Sonam", "job":"Web Dev"}'
 }
 axios(config).then((res) => {
  console.log(res.data)
 }).catch((error) => {
  console.log(error)
 })
}

// function makerequest() {
//  console.log("Button Clicked")
//  const config = {
//   headers: {
//    'Content-Type': 'application/json'
//   },
//  }
//  axios.post('https://reqres.in/api/users', '{"name":"Rahul", "job":"DevOps"}', config).then((res) => {
//   console.log(res.data)
//  }).catch((error) => {
//   console.log(error)
//  })
// }

// Async and Await
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const config = {
//    method: 'POST',
//    url: 'https://reqres.in/api/users',
//    headers: {
//     'Content-Type': 'application/json'
//    },
//    data: '{"name":"Sonam", "job":"Web Dev"}'
//   }
//   const res = await axios(config)
//   console.log(res.data)
//  } catch (error) {
//   console.log(error)
//  }
// }

// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const config = {
//    headers: {
//     'Content-Type': 'application/json'
//    },
//   }
//   const res = await axios.post('https://reqres.in/api/users', '{"name":"Rahul", "job":"DevOps"}', config)
//   console.log(res.data)
//  } catch (error) {
//   console.log(error)
//  }
// }