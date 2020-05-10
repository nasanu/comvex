export let apiBase = "https://api.themoviedb.org/3";
const key = "api_key=fa95d572de38b3766050ebc80badc846";

// if (process.env.NODE_ENV === "development") {
//   apiBase = "https://localhost:44323";
// }

export const Api = {
  getMulti: apiBase + "/search/multi?" + key,
  getVideos: (id: number): string => apiBase + "/movie/" + id + "/videos?" + key,
};
