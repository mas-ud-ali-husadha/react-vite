interface UserData {
  id: number;
  name: string;
  email: string;
  photo_url: string;
  phone_number: string | null;
  updated_security: string;
  user_roles_id: string;
  access: {
    user: {
      view: boolean;
      create: boolean;
      update: boolean;
      delete: boolean;
    };
    roles: {
      view: boolean;
      create: boolean;
      update: boolean;
      delete: boolean;
    };
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AccessTokenData {
  data: {
    access_token: string;
    token_type: string;
    user: UserData;
  };
  message: string;
  settings: any[];
  errors?: "";
}
