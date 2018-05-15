import React from 'react'
import Component from './BaseComponent'
import { connect } from 'react-redux'
import {listSelect} from '../selectors/selector'
import {ListCell} from '../components/ListCell'

class ListComponent extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    prepareListView(props) {
        if(!props.planets || props.planets.length === 0) {
            return []
        }

        let list = []
        for(let item of props.planets) {
            list.push(<ListCell item={item} key={item.name}/>)
        }
        return list
    }

    render () {

        let list = this.prepareListView(this.props)
        return(
            <div style={{width:"100%"}}>
                <div style={{width:"90%", marginLeft:"auto", marginRight:"auto"}}>
                    {list.length ? (
                        <div style={{width:"100%", height:60, border:"1px solid gray",fontWeight:700, backgroundColor:"#fcc2ff"}}>
                            <div style={{width:"calc(50% - 30px)", padding:10, float:"left"}}>{"Planent Name"}</div>
                            <div style={{width:"calc(50% - 30px)", padding:10, float:"left"}}>{"Population"}</div>
                        </div>
                    ) : null}
                    {list}
                </div>

            </div>
        )
    }
}

const ListComponentCon = connect(listSelect)(ListComponent)

export default ListComponentCon