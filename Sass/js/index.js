fetch('https://icanhazdadjoke.com/',{
    
headers:{
     Accept: "application/json",//request
    },
})

//promis kas bus 


.then(responce => responce.json())//responce
.then(data => {
const jokearea = document.querySelector(".jokearea")
jokearea.textContent = data.joke;
});

