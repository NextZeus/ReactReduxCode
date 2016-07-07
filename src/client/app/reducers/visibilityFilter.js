/**
 * Created by lixiaodong on 16/7/7.
 */
const visibilityFilter = (state = 'SHOW_ALL', action={}) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter;