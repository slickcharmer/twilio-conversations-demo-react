export enum ActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  LIST_CONVERSATIONS = "LIST_CONVERSATIONS",
  UPDATE_CURRENT_CONVERSATION = "UPDATE_CURRENT_CONVERSATION",
  CONVERSATION_LAST_READ_INDEX = "CONVERSATION_LAST_READ_INDEX",
  REMOVE_CONVERSATION = "REMOVE_CONVERSATION",
  ADD_MESSAGES = "ADD_MESSAGES",
  REMOVE_MESSAGES = "REMOVE_MESSAGES",
  UPDATE_LOADING_STATE = "update loading state",
  UPDATE_PARTICIPANTS = "UPDATE_PARTICIPANTS",
  UPDATE_UNREAD_MESSAGES = "UPDATE_UNREAD_MESSAGES",
  UPDATE_CONVERSATION = "UPDATE_CONVERSATION",
  ADD_ATTACHMENT = "ADD_ATTACHMENT",
  TYPING_STARTED = "TYPING_STARTED",
  TYPING_ENDED = "TYPING_ENDED",
  ADD_NOTIFICATIONS = "ADD_NOTIFICATIONS",
  REMOVE_NOTIFICATIONS = "REMOVE_NOTIFICATIONS",
}
