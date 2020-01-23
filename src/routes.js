import Posts from "./views/Posts";
import PostDetails from "./views/PostDetails";
import UserProfile from "./views/UserProfile";

export default [
  {
    exact: true,
    path: "/",
    component: Posts
  },
  {
    exact: true,
    path: "/post/:postId",
    component: PostDetails
  },
  {
    exact: true,
    path: "/user/:userId",
    component: UserProfile
  }
];
