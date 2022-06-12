const endpoint = "http://localhost:5000/graphql";

const USER_ALL = `query {
    getUsers{
        id
      username
    }
  }

`;
const USER_ID = (id: number) => `query {
    getById(id:${id}){
        id
     username
   }
   }

`;

const USER_REMOVE = (id: number) => `mutation {
    removeUser(id:${id})
  }`;

const USER_LOGINAD=(username:string|undefined,password:string|undefined)=>`
mutation{
	loginAdmin(username:"${username}",password:"${password}")
}`

export const fetchUsers = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: USER_ALL,
    }),
  });
  return response.json();
};

export const fetchUserId = async (id: number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: USER_ID(id),
    }),
  });
  return response.json();
};

export const fetchUserRemoveId = async (id: number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: USER_REMOVE(id),
    }),
  });
  return response.json();
};

export const fetchUserLoginAd=async (username:string|undefined,password:string|undefined)=>{
  const response =await fetch(endpoint,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      query: USER_LOGINAD(username,password),
    })
  })
  return response.json();
}
