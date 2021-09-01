import React, { Component } from 'react'
import Card from '../components/Card'
import 'bootswatch/dist/solar/bootstrap.min.css'

const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=3c86e97'


export default class ListContainer extends Component {
    constructor() {
        super()
        this.state = {
            peli: [],
            searchTerm: 'Batman',
            error: ''
        }
    }

    async componentDidMount() {
        const res = await fetch(`${url}&s=${this.state.searchTerm}`)
        const { Search } = await res.json()
        this.setState({ peli: Search })
        console.log(this.state.peli)
    }

    render() {
        const handleSubmit = async(e) => {
            e.preventDefault()
            const res = await fetch(`${url}&s=${this.state.searchTerm}`)
            const { Search } = await res.json()
            this.setState({ peli: Search })
        }
        
        return (
            <div>
                <form onSubmit={handleSubmit} >
                    <input 
                    type ="text"
                    name ="searchTerm"
                    className = "form-control"
                    placeholder="Search"
                    onChange={(e) =>this.setState({searchTerm: e.target.value})}
                    value={this.state.searchTerm}
                    />
                </form>
                <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
                    {
                        this.state.peli.map((movie, index) => {
                            return (
                                <Card
                                    key={index}
                                    data={movie}
                                />
                            )
                        })
                    }

                </div>
            </div>

        )
    }
}
