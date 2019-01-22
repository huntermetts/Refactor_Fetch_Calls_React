const remoteURL = "http://localhost:5002"

export default {
    //   Employee fetches
    getEmployee(id){
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },
    getAllEmployees() {
        return fetch(`${remoteURL}/employees`).then(e => e.json())
    }
}