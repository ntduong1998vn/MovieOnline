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

export function getListCasters() {
    return request({
        url: API_BASE_URL + "/api/cast/",
        method: "GET"
    });
}

export function loadCastListExceptImg(){
    return request({
        url: `${API_BASE_URL}/api/cast/all-except-image`,
        method:'GET'
    })
}

export function deleteById(casterID) {
    return request({
        url: API_BASE_URL + "/api/cast/" + casterID,
        method: "DELETE"
    });
}

export async function addNew(formData) {
    const response = await fetch(`${API_BASE_URL}/api/cast/addNew`, {
        method: 'PUT',
        body: formData
    })
    if (response.ok) return Promise.resolve("Thanh Cong");

    return Promise.reject("That bai");
}

export async function update(casterID, formData) {
    const response = await fetch(`${API_BASE_URL}/api/cast/` + casterID, {
        method: 'PUT',
        body: formData
    })
    if (response.ok) return Promise.resolve("Thanh Cong");

    return Promise.reject("That bai");
}

