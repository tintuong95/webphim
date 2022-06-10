export const uploadFilmImage = async (formData: FormData) => {
  const response = await fetch("http://localhost:5000/upload", {
    method: "POST",
    headers: {
  
    },
    body: formData,
  });
  return response.json()
};
