import http from "@/utils/http";

export function getArticleList(data) {
  return http.get("/articleCRUD/get_articleList", data);
}