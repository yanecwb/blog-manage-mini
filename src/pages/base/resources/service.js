import http from "@/utils/http";

export function getResourcesList(data) {
  return http.get("/resourcesCRUD/resources_list", data);
}
export function delResources(data) {
  return http.delete("/resourcesCRUD/del_resources", data);
}
export function updateResources(data) {
  return http.post("/resourcesCRUD/update_resources", data);
}
export function addResources(data) {
  return http.post("/resourcesCRUD/add_resources", data);
}
