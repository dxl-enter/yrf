import { useUserToken } from "@/store/userStore";
import { Navigate } from "react-router";
import LoginForm from "./LoginForm";
import { LoginStateProvider } from "./providers/LoginStateProvider";
import { useSignIn } from "@/store/userStore";
import { DEFAULT_USER } from "@/_mock/assets";
const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

function Login() {
	const signIn = useSignIn();
	signIn({ username: DEFAULT_USER.username, password: DEFAULT_USER.password });
	
	const token = useUserToken();

	console.log('token.accessToken====', token.accessToken);
	
	// 判断用户是否有权限
	if (token.accessToken) {
		// 如果有授权，则跳转到首页
		return <Navigate to={HOMEPAGE} replace />;
	}
	return (
		<LoginStateProvider>
			<LoginForm />
		</LoginStateProvider>
	);
}
export default Login;
