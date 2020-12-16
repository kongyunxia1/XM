export function uploaded(data) {
    return post('/api/v1/common/file_upload', data)
}
export function loginAPI(user) {
    return post('/api/v1/auth/login', user)
}