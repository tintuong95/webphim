const endpoint = "http://localhost:5000/graphql";

const LOGIN = (usename: string, password: string) => `
{
 signin (username:"${usename}",password:"${password}")
}`;

const SIGNUP = (usename: string, password: string) => `
{
 signup (username:"${usename}",password:"${password}")
}`;




export const fetchLogin = async (username: string, passoword: string) => {
  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: `mutation ${LOGIN(username, passoword)}` }),
  });

  return response.json();
};


export const fetchSignup=async (username:string,passoword:string)=>{
  const response =await fetch(endpoint,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      query:`mutation ${SIGNUP(username, passoword)}`
    })
  })
  return response.json()
}