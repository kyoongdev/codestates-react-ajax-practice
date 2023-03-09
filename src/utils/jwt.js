export const saveTokens = (token) =>{
    localStorage.setItem("accessToken", token.accessToken);
    localStorage.setItem("refreshToken", token.refreshToken);
}
export const getTokens = () =>{
    const accessToken = localStorage.getToken("accessToken");
    const refreshToken = localStorage.getToken("refreshToken");
    return({
        accessToken,
        refreshToken,
    });
}