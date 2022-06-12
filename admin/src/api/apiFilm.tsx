const endpoint = "http://localhost:5000/graphql";

const FILM_ALL = `{
    filmGetAllNoLimit{
        id
        name
        category{
          name
        }
        author{
          name
        }
        publicYear
    }
}`;

const FILM_ID = (id: number) => `query {
  filmGet(id:${id}){
    id
    name
    categoryId
    authorId
    publicYear
    description
    link
    img
 }
   
 }`;

const FILM_REMOVE_ID = (id: number) => `mutation {
    filmRemove(id:${id})
  }

`;

const FILM_CREATE = (
  name: string,
  publicYear: number,
  categoryId: number,
  authorId: number,
  description: string,
  link: string,
  img: string
) => `mutation {
  filmCreate( name:"${name}",categoryId:${categoryId},authorId:${authorId},publicYear:${publicYear},description:"${description}",link:"${link}",img:"${img}")
}
`;


const FILM_UPDATE = (
  id:number,
  name: string,
  publicYear: number,
  categoryId: number,
  authorId: number,
  description: string,
  link: string,
  img: string
) => `mutation {
  filmUpdate(id:${id}, name:"${name}",categoryId:${categoryId},authorId:${authorId},publicYear:${publicYear},description:"${description}",link:"${link}",img:"${img}")
}
`;

export const fetchFilms = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: FILM_ALL,
    }),
  });

  return response.json();
};

export const fetchFilmId = async (id:number) => {
  
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: FILM_ID(id),
    }),
  });

  return await response.json();
};

export const fetchFilmRemoveId = async (id: number) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: FILM_REMOVE_ID(id),
    }),
  });

  return response.json();
};

export const fetchFilmCreate = async (
  name: string,
  publicYear: number,
  categoryId: number,
  authorId: number,
  description: string,
  link: string,
  img: string
) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: FILM_CREATE(
        name,
        Number(publicYear),
        Number(categoryId),
        Number(authorId),
        description,
        link,
        img
      ),
    }),
  });
  return response.json();
};


export const fetchFilmUpdate = async (
  id:number,
  name: string,
  publicYear: number,
  categoryId: number,
  authorId: number,
  description: string,
  link: string,
  img: string
) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: FILM_UPDATE(
        id,
        name,
        Number(publicYear),
        Number(categoryId),
        Number(authorId),
        description,
        link,
        img
      ),
    }),
  });
  return response.json();
};

