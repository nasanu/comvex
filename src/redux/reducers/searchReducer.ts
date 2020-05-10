//action types
export const searchActionTypes = {
  search: {
    request: "search/multi/request",
    success: "search/multi/success",
    fail: "search/multi/fail",
  },
  videos: {
    request: "videos/request",
    success: "videos/success",
    fail: "videos/fail",
    modalOpen: "vidoes/modal/open",
    modalClose: "videos/moodal/close",
    setFilter: "videos/filter/set",
  },
};

//Actions

export const searchActions = {
  multiSearch(query: string) {
    return {
      type: searchActionTypes.search.request,
      payload: query,
    };
  },
  getVideos(id: number) {
    return {
      type: searchActionTypes.videos.request,
      payload: id,
    };
  },
};

export const filterTypes = {
  All: "All",
  Movies: "movie",
  TV: "tv",
  people: "person",
};

export interface ISearch {
  context: {
    modalOpen: boolean;
    mediaType: string;
  };
  results: any[] | null;
  videos: any[] | null;
}
const initialState: ISearch = {
  context: {
    modalOpen: false,
    mediaType: filterTypes.All,
  },
  results: null,
  videos: null,
};

//Reducers
export default function (state = initialState, action: any) {
  switch (action.type) {
    case searchActionTypes.search.success: {
      return {
        ...state,
        results: action.payload.results,
      };
    }
    case searchActionTypes.videos.success: {
      return {
        ...state,
        videos: action.payload,
      };
    }
    case searchActionTypes.videos.modalOpen: {
      return {
        ...state,
        context: { ...state.context, modelOpen: true },
      };
    }
    case searchActionTypes.videos.modalClose: {
      return {
        ...state,
        context: { ...state.context, modelOpen: false },
      };
    }
    case searchActionTypes.videos.setFilter: {
      return {
        ...state,
        context: { ...state.context, mediaType: action.payload },
      };
    }
    default:
      return state;
  }
}
