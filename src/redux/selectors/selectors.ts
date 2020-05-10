import { createSelector } from "reselect";
import { IStore } from "../reducers/rootReducer";
import { filterTypes } from "../reducers/searchReducer";

//search
function searchSelector(state: IStore) {
  return state.search;
}

export const filterSelector = createSelector([searchSelector], (store) => {
  return store && store.context.mediaType;
});

export const searchResults = createSelector([searchSelector, filterSelector], (store, filter) => {
  if (filter === filterTypes.All) {
    return store && store.results;
  }
  return store && store.results?.filter((item) => item.media_type === filter);
});

export const searchFilderedSelector = (filter: string) => {
  return createSelector([searchResults], (store) => {
    return store?.filter((item) => item.media_type === filter);
  });
};

export const videosSelector = createSelector([searchSelector], (store) => {
  return store && store.videos;
});

export const videoSelector = (id: number) => {
  return createSelector([videosSelector], (store) => {
    const found = store && store.find((item) => item.id === id);

    return found && found.results;
  });
};
