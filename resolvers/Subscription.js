const Subscription = {
    comment:{
        subscribe(parent,{authorId},{db, pubsub}, info){
            const post = db.users.find(user=>user.id === authorId)

            if(!post){
                throw new Error('Post not exist')
            }
            return pubsub.asyncIterator(`comment ${authorId}`)
        }
    }
}

export default Subscription