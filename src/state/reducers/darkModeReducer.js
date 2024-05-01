const toggleDarkModeReducer = (status = false, action) => {
    switch (action.type) {
        case 'darkMode':
            return action.payload;
        default:
            return status;
    }
}

export default toggleDarkModeReducer;