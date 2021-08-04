import request from '@/utils/request'

const api_name = `/api/user`

export default {
    getUserInfo() {
        return request({
          url: `${api_name}/auth/getUserInfo`,
          method: `get`
        })
    },        
    login(userInfo) {
        return request({
            url: `${api_name}/login`,
            method: `post`,
            data: userInfo
        })
    },
    saveUserAuah(userAuth) {
        return request({
          url: `${api_name}/auth/userAuth`,
          method: 'post',
          data: userAuth
        })
    }
      
}
