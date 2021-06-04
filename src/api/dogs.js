const fetchDogBreeds = () => {
    console.log("hola");
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(data => data.json())
    .then(dogs => console.log(dogs))
    .catch(e => console.error("Promise was rejected", e));
}

  
export default {
    getDogs () {
        setTimeout(() => fetchDogBreeds(), 100)
    },
}