export const apiCall = async link => {
  try {
    const res = await fetch(link);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
