export const SEARCH_RESULT = 'SEARCH_RESULT';
export const DETAIL_RESULT = 'DETAIL_RESULT';

const initialState: ISearchCards = { docs: [], limit: 50, page: 1, pages: 0, total: 0 };

export default function searchResultsReducer(
  state = initialState,
  action: ISearchAction
): ISearchCards {
  switch (action.type) {
    case SEARCH_RESULT:
      return { ...state, ...action.payload };
      break;
    case DETAIL_RESULT:
      return { ...state, ...action.payload };
      break;

    default:
      return state;
  }
}

export const setSearchResult = (
  searchCards: ISearchCards
): { type: string; payload: ISearchCards } => ({
  type: SEARCH_RESULT,
  payload: searchCards,
});
