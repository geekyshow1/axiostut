document.getElementById("btn").addEventListener("click", makerequest);

// Axios Instance
const ai = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// Get Request
function makerequest() {
  console.log("Button Clicked")
  ai('/posts/1')
    .then((res) => {
      console.log("Data:", res.data)
      console.log("ID:", res.data.id)
      console.log("Title:", res.data.title)
      console.log("Body:", res.data.body)
    }).catch((error) => { console.log(error) })
}

// function makerequest() {
//   console.log("Button Clicked")
//   ai('/posts/')
//     .then((res) => {
//       console.log("Data:", res.data)
//     }).catch((error) => { console.log(error) })
// }