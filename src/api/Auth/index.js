import loginApiClient from "../loginApiClient";

//이때 body -> {email, password}
export const loginApi = (body) =>{
    return loginApiClient.post("/auth/login",body);
}
//이때 body -> {email, password,name}
export const registerApi = (body) =>{
    return loginApiClient.post("/auth/register",body);
}

export const kakaoLogin = () =>{
    return loginApiClient.get("/auth/kakao");
}
//이때 body -> {email,name,token}
export const kakaoRegister = (body) =>{
    return loginApiClient.post("/auth/kakao/user",body);
}
//MEMO : FE(페이지) - BE(서버) - 카카오서버
//NOTE: 사용자가 카카오 로그인 버튼 클릭 => GET /auth/kakao 호출  =>  페이지에 카카오 로그인 페이지가 나타남
//NOTE: 사용자가 아이디 비밀번호 입력후 로그인(카카오)
//NOTE: => 카카오 서버에서 Auth Code를 GET /auth/kako/callback (kyoongdev.com/auth/kakao/callback?code=~~~)으로
//NOTE: 서버에서 카카오 서버에 유저 정보를 요청 => 유저가 우리 DB에 회원가입을 했는지 확인(socialId)
//NOTE: 성공 => http://localhost:3000/social?status=200&accessToken=~~~&refreshToken=~~~
//NOTE: 실패 => http://localhost:3000/social?status=404&kakaoAccessToken=~~~&message=NotFoundUser
//NOTE: =>> Redirect 

//NOTE: 소셜로그인 회원가입
//NOTE: 1) 소셜 정보 외에 다른 정보를 필요로하는 서비스
//NOTE: 2) 소셜 정보만 있으면 되는 서비스

