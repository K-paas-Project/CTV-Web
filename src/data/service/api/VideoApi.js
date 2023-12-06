import {httpClient} from "../HttpClient";

export function getMain() {
  return httpClient.get(`/fire`);
}

export function getVideo(videoId) {
  return httpClient.get(`/${videoId}`);
}