const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

export { getIsLoggedIn, getUserName }

// const authSelectors = {
//     getIsLoggedIn,
//     getUserName,
// }

// export default authSelectors;