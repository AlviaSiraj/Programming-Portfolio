import React, {useEffect, useState} from 'react'
import "./scroll.css";
import { useWindowScroll } from 'react-use';

export const scroll = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const{y:pageYOffset}=useWindowScroll();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Visible, setVibility] = useState(false)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(pageYOffset>400){
            setVibility(true);
        }else{
            setVibility(false);
        }
       
    }, [pageYOffset]);

     const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})


    if(!Visible){
        return false;
    }
    return (
        <div className="scroll-to-top" onClick={scrollTop}>
            <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}

export default scroll
