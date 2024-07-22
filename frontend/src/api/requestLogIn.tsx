import { z } from "zod";
import { API_URL } from "./API_URL";
import { formSchema } from "@/components/login/LoginForm";

export interface POST_SignUpResponseFormat {
    // ...
}

type user_id = number;

/*******************
 *    회원 가입
 *******************/
export async function requestLogIn(
    formData: z.infer<typeof formSchema>
) {

  const requestUrl = `${API_URL}/login`;

  const signUpResponse = await fetch(requestUrl, {
    method: 'POST',
    headers: {
        Accept: 'application/json','Content-Type': 'application/json',
        "Authorization": `Basic ${window.btoa(`${formData.email}:${formData.password}`)}`
      },
  });
  return signUpResponse;
}