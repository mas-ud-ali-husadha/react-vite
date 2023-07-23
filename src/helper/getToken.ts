import { store } from "@/store";

const getToken = () => {
  const access_token = store.getState().profile.userData.data.access_token;
  const token_type = store.getState().profile.userData.data.token_type;
  return { access_token, token_type };
};

export default getToken;
