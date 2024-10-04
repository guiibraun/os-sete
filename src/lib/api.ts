import { ofetch } from "ofetch";

export const api = ofetch.create({
  baseURL: 'https://admin-os-sete.spookyhouse.site/items/'
})