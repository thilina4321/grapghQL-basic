const users = [
    { id: "1", email: "haraka", password:"hilina" },
    { id: "2", email: "dilshan", password:"thilina" },
  ];
  
  const posts = [
    { id: "9876", title: "GraphQL", author: "1" },
    { id: "2345", title: "Apolo", author: "1" },
    { id: "3456", title: "Prisma", author: "1" },
  ];

  
  const db = {
      users,
      posts
  }

  export {db as default}
