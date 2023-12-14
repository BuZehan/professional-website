let BASEURL = process.env.NODE_ENV == 'development' ? '/api' : "http://192.168.55.232:3000/api/v1"
const request = (_methods, _url, _data = {}) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${BASEURL}${_url}`,
      method: _methods,
      data: _data,
      header: {
        // authorization: `Bearer ${localStorage.getItem("TOKEN")}`
      },
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

export default request;
