interface Message {
    text:string;
        createdAt: admin.firestore.Timestamp;
        user:{
          _id: string;
          name: string;
          image: string;
        }
}
