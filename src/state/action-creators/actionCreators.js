export const toggleDarkModeAction = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'darkMode',
            payload: status,
        })
    }
}