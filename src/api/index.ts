import axios from 'axios';

class API {
  private _axios;

  constructor() {
    const _axios = axios.create({
      baseURL: 'https://api.chorong.ch/lolmbti',
      headers: {
        'x-api-Key': import.meta.env.VITE_API_KEY
      }
    });
    _axios.interceptors.response.use(this.handleSuccess, this.handleError);
    this._axios = _axios;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    switch (error?.response?.status) {
      default:
        break;
    }
    return Promise.reject(error);
  };

  get({ path, query }) {
    return this._axios
      .get(path, { params: query })
      .then(response => response.data)
      .catch(error => console.error('api error', error));
  }

  post({ path, data }) {
    return this._axios
      .request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data
      })
      .then(response => response.data);
  }

  async getComments(query) {
    const r = await this.get({ path: 'comment', query });
    return r;
  }

  async writeComment(comment) {
    const r = await this.post({ path: 'comment', data: comment });
    return r;
  }
}

export default new API();
