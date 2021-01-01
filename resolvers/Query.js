
const Query = {
    users(parent, args, {db}, info) {
      if (args.query) {
        return db.users.filter((user) => user.name.includes(args.query));
      }
      return db.users;
    },
    comments(parent, args, {db}, info) {
      return db.posts;
    },
  }

  export {Query as default}