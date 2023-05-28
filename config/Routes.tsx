export enum Auth {
  facebookAuth = "/auth/facebook",
  googleAuth = "/auth/google",
}

export enum Looks {
  getLooks = "/looks/",
  getCatNames = "/looks-categories/",
}

export enum Orders {
  getOrder = "/orders/",
  deleteOrder = "/orders/",
  makeOrder = "/orders/",
}
export enum SearchHistory {
  get_searchHistory = "/search/?userId=",
  update_searchHistory = "/search/",
}

export enum User {
  getUser = "/users/me",
  updateUser = "/users/me",
  updateAddress = "/users/address",
}

export enum DeliverAddress {
  sendCode = "/phone-code/",
  verifyCode = "/phone-code/verify/",
  cancelCode = "/phone-code/cancel/",
}

export enum Notifications {
  getNotifications = "/notifications/",
  markAsRead = "/notifications/",
  markAllAsRead = "/notifications/",
  postNotification = "/notifications/"
}

export enum Favorites {
  Favorites = "/favourites/",
}

export enum Chat {
  addMessage = "/chat/",
  getMessages = "/chat/"
}
