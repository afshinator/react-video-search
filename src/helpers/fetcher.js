import endpoints from "./endpoints";
import creds from "./../credentials";

let Vimeo = require("vimeo").Vimeo;
const { clientId, clientSecret, accessToken } = creds.vimeo;
let client = new Vimeo(clientId, clientSecret, accessToken);

function fetchVideos(query, dispatch, whichProviders) {
  const yout = endpoints.rapidapi.youtube;
  const bng = endpoints.rapidapi.bing;

  if (whichProviders.checkedA === true) {
    dispatch({ type: "youTubePending" });
    fetch(yout.endpoint + query, yout.options)
      .then((response) => response.json())
      .then((data) => {
        // console.info(">>>>>> rapidAPI - YOUTUBE data is ", data);
        dispatch({ type: "setYouTube", data: data });
      })
      .catch((error) => {
        dispatch({ type: "youTubeError", data: error });
      });
  } else {
    dispatch({ type: "skip", data: "youTube" });
  }

  if (whichProviders.checkedB === true) {
    dispatch({ type: "bingPending" });
    fetch(bng.endpoint + query, bng.options)
      .then((response) => response.json())
      .then((data) => {
        // console.info(">>>>>> rapidAPI - BING data is ", data);
        dispatch({ type: "setBing", data: data });
      })
      .catch((error) => {
        dispatch({ type: "bingError", data: error });
      });
  } else {
    dispatch({ type: "skip", data: "bing" });
  }

  if (whichProviders.checkedC === true) {
    dispatch({ type: "vimeoPending" });
    client.request(
      {
        method: "GET",
        path: `/videos/?query=${query}`,
      },
      function (error, body, status_code, headers) {
        if (error) {
          dispatch({ type: "vimeoError", data: error });
        }
        // console.info(">>>>>> VIMEO data is ", body);
        dispatch({ type: "setVimeo", data: body });
      }
    );
  } else {
    dispatch({ type: "skip", data: "vimeo" });
  }
}

export default fetchVideos;
