import Constants from "expo-constants";
import { Storage } from "./Storage";

type headers =
  | {
      "Content-Type": string;
      Accept: string;
      "X-AUTH-TOKEN": string;
    }
  | {
      "Content-Type": string;
      Accept: string;
    };

export class ApiClient {
  static async getRequest(
    endpoint: string,
    authToken = "",
    baseUrl = Constants.manifest.extra.baseUrl
  ) {
    let response = await Storage.read("authToken");
    if (response) {
      authToken = JSON.parse(response).token;
    }
    let fullUrl = baseUrl + endpoint;

    let headers: headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (authToken) {
      headers = { ...headers, "X-AUTH-TOKEN": authToken };
    }

    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    try {
      const response = await fetch(fullUrl, requestOptions);
      if (response.status == 200) {
        return { result: await response.json(), status: response.status };
      }

      console.log(
        "unexpected response from " +
          fullUrl +
          "\nwith response:\n" +
          JSON.stringify(response)
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async postRequest(
    endpoint: string,
    body: any,
    authToken = "",
    baseUrl = Constants.manifest.extra.baseUrl
  ) {
    let response = await Storage.read("authToken");
    if (response) {
      authToken = JSON.parse(response).token;
    }
    let fullUrl = baseUrl + endpoint;
    let headers: headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (authToken !== "") {
      headers = { ...headers, "X-AUTH-TOKEN": authToken };
    }

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(fullUrl, requestOptions);
      if (response.status == 200) {
        return { result: await response.json(), status: response.status };
      }

      console.log(
        "unexpected response from " +
          fullUrl +
          "with a result:\n" +
          JSON.stringify(response)
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async putRequest(
    endpoint: string,
    body: any = {},
    authToken = "",
    baseUrl = Constants.manifest.extra.baseUrl
  ) {
    let response = await Storage.read("authToken");
    if (response) {
      authToken = JSON.parse(response).token;
    }
    let fullUrl = baseUrl + endpoint;

    let headers: headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (authToken !== "") {
      headers = { ...headers, "X-AUTH-TOKEN": authToken };
    }
    const requestOptions = {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(fullUrl, requestOptions);
      if (response.status == 200) {
        return { result: await response.json(), status: response.status };
      }

      console.log(
        "unexpected response from " +
          fullUrl +
          "with a result:\n" +
          JSON.stringify(response)
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteRequest(
    endpoint: string,
    body: any,
    authToken = "",
    baseUrl = Constants.manifest.extra.baseUrl
  ) {
    let response = await Storage.read("authToken");
    if (response) {
      authToken = JSON.parse(response).token;
    }
    let fullUrl = baseUrl + endpoint;
    let headers: headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (authToken !== "") {
      headers = { ...headers, "X-AUTH-TOKEN": authToken };
    }

    const requestOptions = {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(fullUrl, requestOptions);
      if (response.status == 200) {
        return { result: await response.json(), status: response.status };
      }

      console.log(
        "unexpected response from " +
          fullUrl +
          "with a result:\n" +
          JSON.stringify(response)
      );
    } catch (error) {
      console.log(error);
    }
  }
}
