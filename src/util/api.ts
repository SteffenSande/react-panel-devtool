import Log from "../util/debug";
import ServerLocation from "./config";

class Api {
  static endpoints = {
    ARTICLE: "article/",
    HEADLINE: "headline/",
    HEADLINES: "headlines/",
    LIMIT: "limit/",
    REPORT: "submission/headline/report/",
    REPORT_CATEGORY: "submission/category/",
    SEARCH: "search/",
    SITE: "site/",
    SUBMIT_SUMMARY: "submission/headline/summary/",
    WORDCLOUD_GENERATOR_ARTICLE: "wordcloud_generator/article/",
    WORDCLOUD_GENERATOR_SITE: "wordcloud_generator/site/"
  };

  BaseUrl: string = ServerLocation.PROD;

  apiBase: string = `${this.BaseUrl}api/`;

  /**
   * Fetch data from endpoint and converts it to json
   * @param endpoint
   * @returns {Promise<T>}
   */
  get(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${this.apiBase}${endpoint}`)
        .then(response => {
          resolve(response.json());
        })
        .catch(error => {
          Log.error(`Could not get ${endpoint}`, error);
          reject();
        });
    });
  }

  image(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${endpoint}`)
        .then(response => resolve(response.blob()))
        .catch(error => {
          Log.error(`Could not get ${endpoint}`, error);
          reject();
        });
    });
  }

  post(endpoint: string, payload: any): Promise<any> {
    return fetch(`${this.apiBase}${endpoint}`, this.post_data(payload))
      .then(response => {
        return response.json();
      })
      .catch(error => {
        Log.error(`Could post ${endpoint}`, error);
      });
  }

  post_data(
    payload: any,
    header = "application/x-www-form-urlencoded"
  ): RequestInit {
    let formBody = "";
    for (const property in payload) {
      if (payload.hasOwnProperty(property)) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(payload[property]);
        formBody += encodedKey + "=" + encodedValue + "&";
      }
    }

    return {
      body: formBody,
      headers: [["Accept", "application/json"], ["Content-Type", header]],
      method: "POST"
    };
  }
}

export default Api;
