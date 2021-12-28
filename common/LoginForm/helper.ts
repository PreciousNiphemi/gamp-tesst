import axios from "axios";
export const login = async (values) => {
  await axios({
    method: "post",
    //on another day this api url will be in .env file
    url: "https://gamp-server-staging.herokuapp.com/v1/auth/login",
    data: {
      email: values.email ,
      password: values.password,
    },
  })
    .then((res) => {
      const token: string = res.data.data.accesstoken;
      localStorage.setItem("token", token);
      console.log(token);
    })
};
