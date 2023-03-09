import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import qs from "query-string";
import { useEffect } from "react";
import { saveTokens } from "../../../utils"
const Social = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const result = qs.parse(location.search);
        
        if(result.status ==="200"){
            saveTokens(result);
            navigate("/");
        }else{
            navigate(`/social/register?token=${result.kakaoAccessToken}`);
        }
    
    },[location]);
    return(
        <div></div>
    );
}
export default Social;