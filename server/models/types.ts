export default interface IArticle {
    _id: string;
    article_id: string;
    likes: string[];
    likes_count: number;
    comments_count: number;
    replies_count: number;
}

export default interface IComment {
    _id: string;
    article_id: string;
    body: string;
    parent?: string;
    likes: string[];
    likes_count: number;
    replies_count: number;
    created_at: string;
    author: {
        _id: string;
        name: string;
        img?: string;
    };
}