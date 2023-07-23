import { useAppSelector } from "./useAppDispatch";

const useAuth = () => {
  const {
    userData: { data: access_token, token_type },
  } = useAppSelector((state) => state.profile);

  return { authenticated: Boolean(access_token), token_type };
};

export default useAuth;
