const endpoint = "http://localhost:5000/graphql";

const CATEGORY_ALL = `query {
  categoryGets{
    name
  }
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
