import { API_BASE_URL, ACCESS_TOKEN } from "../constants/auth";

const request = async options => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  const response = await fetch(options.url, options);
  // Hàm xóa response không có payload
  if (response.status === 205) return response;
  // Lấy payload
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
};

export function getListGenres() {
  return request({
    url: API_BASE_URL + "/api/genres/",
    method: "GET"
  });
}

export function deleteById(genreID) {
  return request({
    url: API_BASE_URL + "/api/genres/" + genreID,
    method: "DELETE"
  });
}

export function addNewGenre(newGenre) {
  return request({
    url: API_BASE_URL + "/api/genres/",
    method: "POST",
    body: JSON.stringify(newGenre)
  });
}
