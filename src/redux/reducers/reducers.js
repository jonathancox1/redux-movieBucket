const initialState = {
    movies: []
}

export default (state = initialState, { type, payload }) => {
    const newState = { ...state }
    switch (type) {

        case 'SAVE_MOVIE':
            return { ...state, movies: [...state.movies, payload] }

        case 'DEL_MOVIE':
            let results = state.movies.filter(movie => movie.imdbID !== payload.imdbID)
            return { ...state, movies: results }

        default:
            return state
    }
}