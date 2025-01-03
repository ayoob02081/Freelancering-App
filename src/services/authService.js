import http from "./httpService";

export function getOtp(data) {
  //data ==> object ===> phoneNumber:"09180522273"
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data) {
  //data ==> object ===> OTPCode:"321346"
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  //data ==> object ===> name, email, role
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  //data ==> object ===> profile info
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logOutUser() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getUsersApi() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
