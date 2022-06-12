import { LargeNumberLike } from "crypto";

const endpoint = "http://localhost:5000/graphql";

const CATEGORY_ALL = `query {
  categoryGets{
    id
    name
  }
}`;

const CATEGORY_ID=(id:number) => `query {
  categoryGet(id:${id}){
    id
    name
  }
}`;

const CATEGORY_CREATE=(name:string) => `mutation {
  categoryCreate(name:"${name}")
}`;


const CATEGORY_UPDATE=(id:number,name:string) => `mutation {
  categoryUpdate(id:${id},name:"${name}")
}`;

const CATEGORY_REMOVE=(id:number) => `mutation {
  categoryDelete(id:${id})
}`;

export const fetchCategorys = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CATEGORY_ALL,
    }),
  });

  return response.json();
};


export const fetchCategory = async (id:number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CATEGORY_ID(id),
    }),
  });

  return response.json();
};

export const fetchCategoryCreate = async (name:string) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: CATEGORY_CREATE(name),
    }),
  });

  return response.json();
};

export const fetchCategoryUpdate = async (id:number,name:string) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: CATEGORY_UPDATE(id,name),
    }),
  });

  return response.json();
};

export const fetchCategoryRemove = async (id:number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: CATEGORY_REMOVE(id),
    }),
  });

  return response.json();
};


