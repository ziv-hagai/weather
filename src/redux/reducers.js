const initState = {
    cities: [],
    cityName: '',
    cittyKey: '',
    day: '',
    week: '',
    metric: true,
    local: []
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'COMPLETE':
            return { ...state, cities: action.payload }
        case 'DAY':
            console.log(action.payload);
            return { ...state, day: { ...action.payload }, cities: [] }
        case 'METRIC':
            return { ...state, metric: !state.metric }
        case 'LOCAL':
            return { ...state, local: action.payload }
        case 'WEEK':
            return { ...state, week: { ...action.payload } }
        case 'CHOOSE':
            return { ...state, cityName: action.payload.name, cityKey: action.payload.key }
        default:
            return { ...state }
    }
}
