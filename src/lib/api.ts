import { ofetch } from "ofetch";

export const api = ofetch.create({
  baseURL: 'https://os-oito-admin.spookyhouse.site/api/'
})