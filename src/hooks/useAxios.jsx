import axios from 'axios'
import { useEffect, useState } from 'react';

export const useAxios = ( url ) => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState(null)

    useEffect( () => {
        axios.get( url )
             .then ( res => {
                setData( res.data )
                setLoading( true )
                setError(null)
             }).catch( error  => {
                setData([])
                setLoading( false )
                setError('주소를 찾을수 없습니다.')
             } )
    },[url])

    return { data , loading , error }
};
 