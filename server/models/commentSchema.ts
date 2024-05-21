import mongoose from "mongoose";

mongoose.Promise = global.Promise;
export const commentSchema = new mongoose.Schema({
    article_id: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    parent: {
        type: String,
        trim: true,
        required: false,
    },
    likes: {
        type: [String],
        required: true,
    },
    likes_count: {
        type: Number,
        default: 0,
        required: true,
    },
    replies_count: {
        type: Number,
        default: 0,
        required: true,
    },
    created_at: {
        type: String,
        trim: true,
        required: true,
    },
    author: {
        _id: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            trim: true,
        },
        img: {
            type: String,
            trim: true,
        },
    },
});

export const Comment =
    mongoose.models.Comment ?? mongoose.model("Comment", commentSchema);