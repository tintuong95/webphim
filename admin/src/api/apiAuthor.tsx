const endpoint = "http://localhost:5000/graphql";

const AUTHOR_ALL = `query {
  authorGets{
    name  
  }
}

`;

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
