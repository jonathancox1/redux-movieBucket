const initialState = {
    movies: [],
    mainList: true
}

export default (state = initialState, { type, payload }) => {

    switch (type) {

        case 'SAVE_MOVIE':
            return { ...state, movies: [...state.movies, payload] }

        case 'DEL_MOVIE':
            let results = state.movies.filter(movie => movie.imdbID !== payload.imdbID)
            return { ...state, movies: results }

        case 'LIST':
            return { ...state, mainList: !state.mainList }

        default:
            return state
    }
}