import React from "react";
import { useContext,useReducer,useEffect} from "react";
import reducer from "./Reducer";
const Appcontext=React.createContext();

const initialState={
    isLoading:true,
    query:"",
    nbPages:0,
    page:0,
    hits:[]
};
const AppProvider=({children})=>{

    const removepost=(id)=>{
        dispatch({type:"removePost",payload:id})
    }
    const searchpost=(searchquery)=>{
        dispatch({type:"searchPost",payload:searchquery})
    }
    const getprevpage=()=>{
        dispatch({type:"prevPage",});
      }
      const getnextpage=()=>{
        dispatch({type:"nextPage",});
      }
    const [state, dispatch] = useReducer(reducer,initialState);
    let url=`http://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`;
    useEffect(() => {
        state.isLoading=true;
        const getdata=async()=>{
            let res=await fetch(url);
            let data=await res.json();
            dispatch({type:"getStory",payload:{hits:data.hits,nbPages:data.nbPages}});
        };
        getdata();
    },[url]);
return (
        <Appcontext.Provider value={{...state,removepost,searchpost,getnextpage,getprevpage}}>{children}</Appcontext.Provider>
    )
}
// constum hooks

const useGlobalContext=()=>{
    return useContext(Appcontext);
}
export {Appcontext,AppProvider,useGlobalContext};



