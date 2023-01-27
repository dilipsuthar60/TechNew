const reducer = (state, action) => {
    switch (action.type) {
        case "getStory":
            return {
                ...state,
                hits: action.payload.hits,
                isLoading:false,
                nbPages:action.payload.nbPages
            }
        case "removePost":
            return {
                ...state,
                hits: state.hits.filter((elememt) => {
                    return elememt.objectID !== action.payload;
                })
            }
        case "searchPost":
            return {
                ...state,
                query: action.payload     
            }
        case "nextPage":
            let pagenumberinc=state.page;
            if(pagenumberinc>=state.nbPages)
            {
                pagenumberinc=0;
            }
            else
            {
                pagenumberinc+=1;
            }
            return {
                ...state,
                page:pagenumberinc
            }
        case "prevPage":
            let pagenumber=state.page;
            if(pagenumber<=0)
            {
                pagenumber=0;
            }
            else
            {
                pagenumber-=1;
            }
            return {
                ...state,
                page:pagenumber
            }
    }
    return state;
}
export default reducer;