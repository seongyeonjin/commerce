import { useCallback, useState } from "react";

export const useInput = ( initialState = {} ) => {
    const [ state , setState ] = useState( initialState )

    // useCallback 함수     
    /* 
        useCallback( () => {} , [의존성])
        의존성 바뀔때마다 함수를 생성한다    
    */

    const changeInput =useCallback( e  => {
        const { value  , name } = e.target 
        setState({...state , [name]:value })
    },[state])

    return  { state , changeInput }
};

