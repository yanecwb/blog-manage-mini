import http from "@/utils/http";

export function getAccountList(data) {
  return http.get("/userCRUD/get_userList", data);
}
export function changeStatus(data) {
  return http.post("/userCRUD/change_status", data);
}