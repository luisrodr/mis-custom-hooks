import { useState,useEffect,useRef} from "react";

export const useFetch = (url) => {
         //referencia a componente si esta montado
        const isMounted = useRef(true);


        const [state, setstate] = useState({data:null,loading:true,error:null});
        
        
        //para cuando se desmonte se cambie la referencia del componente a false . para evitar error de hacer referencia si no esta montado
        useEffect(() => {
            
            return () => {
                isMounted.current=false;
            }
        }, [])





        useEffect(() => {

            setstate({data:null,loading:true,error:null});
            fetch(url)
            .then(resp=>resp.json()) 
            .then(data=>{
                if (isMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                    })
                }else{
                    console.log("componente no se monto");
                }
                // setTimeout(() => {
                // }, 1000);    

            }).catch(()=>{
                setstate({
                    data:null,
                    loading:false,
                    error:'no se pudo cargar la data'
                })
            });

        },[url] );



        return state;
};
