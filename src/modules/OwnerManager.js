const remoteURL = "http://localhost:5002"

export default {
    //   Employee fetches
    getOwner(id){
        return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
    },
    getAllOwners() {
        return fetch(`${remoteURL}/owners`).then(e => e.json())
    }
}