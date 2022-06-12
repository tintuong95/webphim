const endpoint = "http://localhost:5000/graphql";

const AUTHOR_ALL = `query {
  authorGets{
    id
    name  
  }
}`;

const AUTHOR_ID =(id:number)=> `query {
  authorGet(id:${id}){
    name
    id
  }
}`;




const AUTHOR_CREATE=(name:string)=>`mutation {
  authorCreate(name:"${name}")
}`


const AUTHOR_UPDATE=(id:number,name:string)=>`mutation {
  authorUpdate(id:${id},name:"${name}")
}`


const AUTHOR_REMOVE=(id:number)=>`mutation {
  authorDelete(id:${id})
 }`

export const fetchAuthors = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AUTHOR_ALL,
    }),
  });

  return response.json();
};


export const fetchAuthorId = async (id:number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AUTHOR_ID(id),
    }),
  });

  return response.json();
};


export const fetchAuthorCreate = async (name:string) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: AUTHOR_CREATE(name),
    }),
  });

  return response.json();
};


export const fetchAuthorUpdate = async (id:number,name:string) => {
 
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: AUTHOR_UPDATE(id,name),
    }),
  });

  return response.json();
};


export const fetchAuthorRemove=async (id:number)=>{
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: AUTHOR_REMOVE(id),
    }),
  });

  return response.json();
}
