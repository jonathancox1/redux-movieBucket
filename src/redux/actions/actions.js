
export const saveMovie = (data) => {
    return {
        type: 'SAVE_MOVIE',
        payload: data
    }
}

export const deleteItem = (data) => {
    return {
        type: 'DEL_MOVIE',
        payload: data
    }
}

