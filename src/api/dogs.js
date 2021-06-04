import { compareBuild } from "semver";


const fetchDogBreeds = async () => {
    const data = await fetch('https://api.thedogapi.com/v1/breeds')
    const dogs = data.json()
    return dogs
}


export default {
    async getDogs (cb) {
        const perros = await fetchDogBreeds()
        console.log(perros)
        setTimeout(() => cb(perros), 100)
    },
}