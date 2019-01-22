const remoteURL = "http://localhost:5002"

export default {
    // Animal fetches
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  }
}