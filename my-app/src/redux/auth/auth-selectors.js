export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

// export { getIsLoggedIn, getUserName, getIsFetchingCurrent }

// const authSelectors = {
//     getIsLoggedIn,
//     getUserName,
// }

// export default authSelectors;