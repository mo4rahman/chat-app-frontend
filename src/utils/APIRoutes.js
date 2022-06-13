const host = "http://localhost:4000";
// Have to do it like this because you can only have one export default
export const signupRoute = `${host}/api/auth/signup`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
