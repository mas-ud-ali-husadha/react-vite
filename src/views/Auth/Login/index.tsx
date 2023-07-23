import {
  Card,
  Input,
  Form,
  InputLabelVertical,
  InputPassword,
  Button,
} from "@/components/ui";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { LoginPayload } from "@/types/LoginTypes";
import { LoginPost } from "@/store/auth/login/action";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();

  const fetch = async (data: LoginPayload) => {
    setLoading(true);
    try {
      await dispatch(LoginPost(data));
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: LoginPayload) => {
    await fetch(data);
  };

  return (
    <Card className="p-8 md:p-16 shadow-lg rounded-3xl m-auto w-11/12 max-w-[452px] flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-center ">
        <h1 className="text-primary">LOGIN</h1>
        <p className="font-medium">Please Login To Continue</p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} spacing="medium">
        <InputLabelVertical label="Email" name="email" errors={errors}>
          <Input
            {...register("email", {
              required: "Email wajib diisi",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Format Email salah",
              },
            })}
            variant="border-bottom"
            placeholder="example@gmail.com"
          />
        </InputLabelVertical>
        <InputLabelVertical label="Password" name="password" errors={errors}>
          <InputPassword
            {...register("password", {
              required: "Password wajib diisi",
              minLength: {
                message: "Password Harus Minimal 6 Karakter.",
                value: 6,
              },
            })}
            iconColor="text-primary"
            variant="border-bottom"
            placeholder="Your Password"
            type="password"
          />
        </InputLabelVertical>

        <Button
          type="submit"
          disabled={loading}
          text="Login"
          variant="primary"
          className="rounded-full  text-white h-12 m-5 shadow-xl transition-all text-base "
        />
      </Form>
    </Card>
  );
};

export default Login;
