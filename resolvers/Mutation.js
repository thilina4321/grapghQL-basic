import {v4} from 'uuid'

const Mutation = {
    deleteUser(parent,{db},ctx,info){
        const userIndex = db.users.findIndex(user=>user.id === args.userId)
        console.log(userIndex);
        if(userIndex == -1){
            throw new Error("cant find user")
        }
        const deletedUser = db.users.splice(userIndex,1)
        return "deletedUser"
    },

  createComment(parent, args,{db, pubsub},info){
      const existUser = db.users.some(user=> user.id == args.data.author)
      if(!existUser){
          throw new Error('No user for this post')
      }

      const author = db.users.find((user)=>user.id === args.data.author)
      const post = {...args.data, id:v4()}
      pubsub.publish(`comment ${author.id}`,{
          comment:{

              data:post,
              mutation:'CREATED',
          }
      })
      return post
  },
  updateUser(parent,args, {db}, info){

    const {data, id} = args

    const userIndex = db.users.findIndex(user=>user.id === id)
    if(id == -1){
        throw new Error('cant find the user')
    }

    let newData =  {...db.users[userIndex], ...data}
    console.log(newData);



  },
  createUser(parent, args, {db}, info) {
      const emailTaken = db.users.some(user=>user.email === args.data.email)
      
      if(emailTaken){
           throw new Error("Email already taken")
      }

      const user = {
          ...args.data,
          id:v4()
      }

      db.users.push(user)
      console.log(db.users);
      return user
  },
}


export default Mutation 