const Reducer = (state, action) => {
    switch (action.type) {
        case 'PROGRESS_INCREASE':
            return {
                ...state,
                progress: action.payload
            };
        case 'FADE_SET':
            return {
                ...state,
                fade: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;