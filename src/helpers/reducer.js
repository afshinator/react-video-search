import cloneDeep from "lodash.clonedeep";

export const resultsObj = {
  queryString: '',
  searchTotal: 0,
  youTube: { status: "idle", data: null, error: null, stats: {} },
  bing: { status: "idle", data: null, error: null, stats: {} },
  vimeo: { status: "idle", data: null, error: null, stats: {} },
}


// function estimatedLength(start, end) {
//   // in milliseconds
//   console.log(end - start);
//   return Math.trunc(end * 1 - start * 1);
// }

export function reducer(state, action) {
  // console.info("___________action: ", action.type, action.data);
  let now = performance.now();
  const newState = cloneDeep(state);
  const current = newState.searches[newState.currentSearch]

  const set = (vendor, status, resolved) => {
    current[vendor].status = status
    current[vendor].stats.resolved = resolved
  }

  switch (action.type) {
    case "inputValChange":
      newState["inputVal"] = action.data;
      return newState;

    case "setQuery":  // queryString to search for
      const newResultsObj = cloneDeep(resultsObj)
      newResultsObj.queryString = action.data
      const length = newState.searches.push( newResultsObj )
      newState.currentSearch = length - 1
      return newState

    case "setCurrent": // which search to activate in the searches list 
      newState.currentSearch = action.data
      return newState
    
    case "reset":
      return newState;


    case "youTubePending":
      set('youTube', 'pending', false)
      current.youTube.stats.requestStarted = now;
      current.searchTotal++
      return newState;

    case "bingPending":
      set('bing', 'pending', false)
      current.bing.stats.requestStarted = now;
      current.searchTotal++
      return newState;

    case "vimeoPending":
      set('vimeo', 'pending', false)
      current.vimeo.stats.requestStarted = now;
      current.searchTotal++
      return newState;


    case "setYouTube":
      set('youTube', 'resolved', true)
      current.youTube.data = action.data
      current.youTube.stats.requestEnded = now;
      return newState

    case "setBing":
      set('bing', 'resolved', true)
      current.bing.data = action.data
      current.bing.stats.requestEnded = now;      
      return newState

    case "setVimeo":
      set('vimeo', 'resolved', true)
      current.vimeo.data = action.data
      current.vimeo.stats.requestEnded = now;         
      return newState


    case "youTubeError":
      set('youTube', 'error', true)
      current.youTube.stats.requestEnded = now;      
      return newState

    case "bingError":
      set('bing', 'error', true)
      current.bing.stats.requestEnded = now;  
      return newState

    case "vimeoError":
      set('vimeo', 'error', true)
      current.vimeo.stats.requestEnded = now;  
      return newState


    default:
      throw new Error(
        "Unknown reducer action in reducer.js --- Did you misspell it ????? You should be using TypeScript!"
      );
  }
}
