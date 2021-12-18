import axios from "axios";

class SquadServerRepo {

  async start() {
    await axios({
      method: 'put',
      url: 'https://0z460yuxcf.execute-api.eu-central-1.amazonaws.com/dev/server/state',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        state: "running",
      }
    })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      });
  }

  async stop() {
    return await axios({
      method: 'put',
      url: 'https://0z460yuxcf.execute-api.eu-central-1.amazonaws.com/dev/server/state',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        state: "stopped",
      }
    })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new SquadServerRepo();