let a=document.getElementById("result")
fetch("https://api.nasa.gov/planetary/apod?api_key=BPYHJB6Zf3g6N0aSexLlkZIGli8MN54tn7bJ5nxc")
.then(response => response.json())
.then(data => {
    console.log(data);

    a.innerHTML = `
        <h1>${data.title}</h1>
        <img src = "${data.url}" width = "500">
        <p>${data.explanation}</p>
    `
})
.catch(error => {
    console.log(error)
})