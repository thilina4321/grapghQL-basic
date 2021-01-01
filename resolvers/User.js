
const User = {
    comments(parent, args, {db}, info) {
      return db.posts.filter((post) => post.author == parent.id);
    },
  }

export default User