import React from 'react'
import { useDispatch} from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const style = {
        marginBottom: 10
      }
    
    return(
        <div style={style}>
            <form>
                filter <input type="text"
                              name="filter"
                              onChange={ ({target}) => dispatch(filterChange(target.value))}
                        />
            </form>
        </div>
    )
}

export default Filter