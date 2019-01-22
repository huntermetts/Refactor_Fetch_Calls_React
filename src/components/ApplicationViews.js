import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from '../modules/OwnerManager';
import LocationManager from '../modules/LocationManager';


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations:[],
        owners:[]
    }

    // Fetch to change state above:
    componentDidMount() {
            // Chaining fetch methods from AnimalManager
            AnimalManager.getAllAnimals().then(allAnimals => {
                this.setState({
                    animals: allAnimals
                })
            })

            EmployeeManager.getAllEmployees().then(allEmployees => {
                this.setState({
                    employees: allEmployees
                })
            })

            LocationManager.getAllLocations().then(allLocations => {
                this.setState({
                    locations:allLocations
                })
            })

            OwnerManager.getAllOwners().then(allOwners => {
                this.setState({
                    owners:allOwners
                })
            })
    }


    // Delete animal (uses module in AmimalManager)
    deleteAnimal = (id) => {
        return AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
          })
        )
      }

    // Delete employee (uses module in EmployeeManager)
    deleteEmployee = (id) => {
        return EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
          })
        )
      }

    deleteOwner = (id) => {
        return OwnerManager.removeAndList(id)
        .then(owners => this.setState({
            owners: owners
          })
        )
      }




    // Rendering to DOM
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                {/* <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} /> */}
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    // adding delete animal function
                    deleteEmployee={this.deleteEmployee}
                    />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners}
                    deleteOwner={this.deleteOwner}/>
                }} />


                {/* Passing delete to AnimalList component */}
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
            </React.Fragment>
        )
    }
}