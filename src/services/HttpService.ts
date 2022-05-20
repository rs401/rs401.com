import axios from "axios";

class HttpService {
  public static get(url: string): any {
    const xhrequest = axios({
      method: "GET",
      url: `${url}`,
    }).then((res) => res.data);
    return xhrequest;
  }
}

export default HttpService;