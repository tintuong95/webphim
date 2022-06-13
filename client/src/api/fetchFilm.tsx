const endpoint:string = process.env.REACT_APP_ENDPOINT||"http://localhost:5000/graphql";


const FILM_ALL = (idCategory: number, offset?: number, search?: string) => {
  const nameSearch = search ? `,search:"${search}"` : "";
  return `
  {
      filmGetAll (categoryId:${idCategory},offset:${
    offset || 0
  } ${nameSearch} ){
          id
          name
          publicYear
          img
          description
          link
          category {
            name
          }
          author{
            name
          }
        }
  }`;
};

const FILM_BY_ID = (id: number) => ` {
  filmGet(id:${id}){
    id
    name
    publicYear
    img
    description
    link
    category {
      name
    }
    author{
      name
    }
  }
}
`;

export const fetchFilmGetAll = async (
  idCategory: number,
  offset?: number,
  search?: string
) => {
 
  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ query: FILM_ALL(idCategory, offset, search) }),
  });

  return response.json();
};

export const fetchFilmGetId = async (id: number) => {

  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body:JSON.stringify({ query: FILM_BY_ID(id) })});

  return response.json();
};
