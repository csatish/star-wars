import React from 'react'
import Component from './BaseComponent'

export class ListCell extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render () {
        return(
            <div style={{width:"100%", height:60, border:"1px solid gray"}}>
                <div style={{width:"calc(50% - 30px)", padding:10, float:"left"}}>{this.props.item.name}</div>
                <div style={{width:"calc(50% - 30px)", padding:10, float:"left"}}>{this.props.item.population}</div>
            </div>
        )
    }
}