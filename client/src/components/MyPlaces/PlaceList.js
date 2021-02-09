import React, { Component } from 'react'
import PlaceCard from './PlaceCard'

export class PlaceList extends Component {
    render() {
        return (
            <div>
                {this.props.places.map((place)=>{
                    return <PlaceCard key={place._id} place={place}/>
                })
                }
            </div>
        )
    }
}

export default PlaceList
