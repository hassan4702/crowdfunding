import mongoose from "mongoose";

mongoose.Promise = global.Promise;
export const articleSchema = new mongoose.Schema({
    article_id: {
        type: String,
        trim: true,
        required: true,
    },
    likes: {
        type: [String],
        default: [],
        required: true,
    },
    likes_count: {
        type: Number,
        default: 0,
        required: true,
    },
    comments_count: {
        type: Number,
        default: 0,
        required: true,
    },
    replies_count: {
        type: Number,
        default: 0,
        required: true,
    },
});

export const Article =
    mongoose.models.Article ?? mongoose.model("Article", articleSchema);