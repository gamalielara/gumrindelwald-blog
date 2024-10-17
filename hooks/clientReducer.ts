import { ClientActionType } from "<utils>/constants";
import { ClientContextState, ClientAction, Comment } from "<utils>/types";

export const clientReducer = (
  state: ClientContextState,
  action: ClientAction<unknown>
): ClientContextState => {
  switch (action.type) {
    case ClientActionType.UPDATE_COMMENTS:
    default:
      return { ...state, comments: action.value as Comment[] };
  }
};
