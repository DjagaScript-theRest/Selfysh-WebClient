export interface IPost {
    _id: String,
    title: String,
    category: String,
    author: String,
    createdOn: Date,
    imageName: String,
    imagePath: String,
    likes: Number,
    dislikes: Number,
    comments: String[]
}