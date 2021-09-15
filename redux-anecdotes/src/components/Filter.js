import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
    
    const style = {
        marginBottom: 10
      }
    
    return(
        <div style={style}>
            <form>
                filter <input type="text"
                              name="filter"
                              onChange={ ({target}) => props.filterChange(target.value)}
                        />
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    filterChange
}

export default connect(
    null,
    mapDispatchToProps
)(Filter)