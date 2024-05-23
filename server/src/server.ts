import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose, { SortOrder } from 'mongoose';
import dotenv from 'dotenv';
import { Article } from '../models/articleSchema';
import { Comment } from '../models/commentSchema';
import IArticle from '../models/types';
import IComment from '../models/types';
import nodemailer from 'nodemailer';
import cron from 'node-cron';
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/send-email', async (req: Request, res: Response) => {
    try {
        // Extract subject and message from the request body
        const { subject, message } = req.body;

        // Create a transporter using Nodemailer with your SMTP configuration
        const transporter = nodemailer.createTransport({
            // Add your SMTP configuration here
            // For example, if using Gmail, you would provide your Gmail SMTP settings
            service: 'gmail',
            auth: {
                user: 'blockfund0@gmail.com',
                pass: 'ebpoaytnxxaantto',
            },
        });

        // Configure the email options
        const mailOptions = {
            from: 'blockfund0@gmail.com',
            to: 'blockfund0@gmail.com',
            subject: subject,
            text: message,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        // Log the message ID and response
        console.log('Message ID:', info.messageId);
        console.log('Email sent:', info.response);

        // Respond with a success message
        res.status(200).send('Email sent successfully');
    } catch (error) {
        // Handle any errors
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

const uri: string =
    process.env.MONGODB_URI || 'mongoose-uri';
(async () => {
    try {
    console.log(uri);
    console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);

        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch {
        console.log('Error connecting to the database');
    }
})();

const emailSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
  });
  const Email = mongoose.model('Email', emailSchema);

  app.post('/subscribe', async (req: Request, res: Response) => {
    const { email } = req.body;
  
    try {
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(200).send({ message: 'Subscribed successfully' });
    } catch (err: any) {
      if (err.code === 11000) {
        res.status(409).send({ message: 'Email already subscribed' });
      } else {
        res.status(500).send({ message: 'Server error' });
      }
    }
  });
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  const sendNewsletter = async () => {
    try {
      const emails = await Email.find({});
      const mailOptions = {
        from: process.env.EMAIL_USER,
        subject: 'Your Newsletter',
        text: 'This is your periodic newsletter.',
      };
  
      emails.forEach((emailDoc) => {
        transporter.sendMail({ ...mailOptions, to: emailDoc.email }, (err, info) => {
          if (err) {
            console.error('Error sending email:', err);
          } else {
            console.log('Email sent:', info.response);
          }
        });
      });
    } catch (err) {
      console.error('Error sending newsletters:', err);
    }
  };
  
  // Schedule the task to run every day at 9 AM
  cron.schedule('0 9 * * *', () => {
    console.log('Sending newsletters...');
    sendNewsletter();
  });



app.get('/health', (_req: Request, res: Response) => {
    res.status(200).send('Server is running');
});

// Route to fetch a single article by its ID.
app.get("/replyke-articles/:article_id", async (req: Request, res: Response) => {
    try {
        // Extract article_id from the path parameters.
        const { article_id } = req.params;

        // Search for the article using Mongoose's findOne method.
        const article: IArticle | null = await Article.findOne({
            article_id,
        }).lean();

        // If no article is found, return a 404 (Not Found) status.
        if (!article) return res.status(404).send();

        // If an article is found, return it with a 200 (OK) status.
        return res.status(200).send(article);

    } catch (err: any) {
        // In case of any server errors, return a 500 (Internal Server Error) status.
        return res.status(500).send({ error: "Server error" });
    }
});

// Route to like an article.
app.post("/replyke-articles/like", async (req: Request, res: Response) => {
    try {
        const { article_id, user_id } = req.body;

        // Validate the presence of article_id and user_id.
        if (!article_id || !user_id) {
            return res
                .status(400)
                .send("Missing article_id or user_id in request body");
        }

        // First we want to fetch the article
        const article: IArticle | null = await Article.findOne({
            article_id,
        }).lean();

        let newArticle;

        if (article) {
            // Prevent duplicate likes.
            if (article.likes.includes(user_id)) {
                return res.status(409).send("User already liked article");
            }

            // Update the article with the new like.
            newArticle = await Article.findOneAndUpdate(
                { article_id },
                {
                    $inc: { likes_count: 1 },
                    $push: { likes: user_id },
                },
                { new: true }
            );
        } else {
            // Create a new article if it doesn't exist.
            newArticle = new Article({
                article_id,
                likes: [user_id],
                likes_count: 1,
                comments_count: 0,
                replies_count: 0,
            });
            await newArticle.save();
        }

        // Return the updated or newly created article.
        return res.status(200).send(newArticle);

    } catch (err: any) {
        // Handle server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// Route to unlike an article.
app.post("/replyke-articles/unlike", async (req: Request, res: Response) => {
    try {
        const { article_id, user_id } = req.body;

        // Validate the presence of article_id and user_id.
        if (!article_id || !user_id) {
            return res
                .status(400)
                .send("Missing article_id or user_id in request body");
        }

        // Fetch the article to check if the user has already liked it.
        const article: IArticle | null = await Article.findOne({
            article_id,
        }).lean();

        // If the article does not exist or the user hasn't liked it.
        if (!article || !article.likes.includes(user_id)) {
            return res
                .status(409)
                .send("Can't unlike, as user didn't like article or article not found");
        }

        // Update the article, reducing the like count and removing the user's ID from likes.
        const updatedArticle = await Article.findOneAndUpdate(
            { article_id },
            {
                $inc: { likes_count: -1 },
                $pull: { likes: user_id },
            },
            { new: true }
        );

        // Return the updated article.
        return res.status(200).send(updatedArticle);

    } catch (err: any) {
        // Handle server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// Route to retrieve comments with pagination and sorting options.
app.get("/replyke-comments", async (req: Request, res: Response) => {
    try {
        const { article_id, sort_by, parent, page = 1, limit = 5 } = req.query;

        // Convert 'limit' and 'page' to numbers and validate them.
        const limitAsNumber = Number(limit);
        if (isNaN(limitAsNumber)) {
            throw new Error("Invalid request: limit must be a number");
        }

        const pageAsNumber = Number(page);
        if (isNaN(pageAsNumber)) {
            throw new Error("Invalid request: page must be a number");
        }

        // Ensure 'page' is a whole number and greater than 0.
        if (pageAsNumber < 1 || pageAsNumber % 1 !== 0) {
            throw new Error(
                "Invalid request: 'page' must be a whole number greater than 0"
            );
        }

        // Define the sort filter based on 'sort_by' query parameter.
        let sort: { [key: string]: SortOrder } = {};

        if (sort_by === "popular") {
            sort = { likes_count: -1, created_at: -1 };
        }
        if (sort_by === "newest") {
            sort = { created_at: 1 };
        }
        if (sort_by === "oldest") {
            sort = { created_at: -1 };
        }

        // Calculate the number of results to skip for pagination.
        const skipCount = (pageAsNumber - 1) * limitAsNumber;

        // Fetch comments based on filters, pagination, and sorting.
        const comments = await Comment.find({
            article_id,
            parent,
        })
            .limit(limitAsNumber)
            .skip(skipCount)
            .sort(sort);

        // Respond with the fetched comments.
        return res.status(200).send(comments);

    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// posting a new comment or reply to an article.
app.post("/replyke-comments", async (req: Request, res: Response) => {
    try {
        const { article_id, comment_body, parent, author } = req.body;

        // Validate the presence of required fields.
        if (!article_id || !comment_body || !author) {
            return res.status(400).send("Missing required comment details");
        }

        const comment = new Comment({
            article_id,
            body: comment_body,
            parent,
            likes: [],
            likes_count: 0,
            replies_count: 0,
            created_at: new Date(),
            author,
        });
        await comment.save();

        // Update the parent comment's reply count if this is a reply.
        if (parent) {
            await Comment.findByIdAndUpdate(parent, {
                $inc: { replies_count: 1 },
            });
        }

        // Fetch the article to update its comment or reply count.
        const article: IArticle | null = await Article.findOne({
            article_id,
        }).lean();

        if (article) {
            // Increment either the direct comments count or the replies count in the article.
            const updateField = parent
                ? { $inc: { replies_count: 1 } }
                : { $inc: { comments_count: 1 } };
            await Article.findOneAndUpdate({ article_id }, updateField);
        } else {
            // Create a new article record if it doesn't exist.
            const newArticle = new Article({
                article_id,
                likes: [],
                likes_count: 0,
                comments_count: 1,
                replies_count: 0,
            });
            await newArticle.save();
        }

        // Return the newly created comment or reply.
        return res.status(200).send(comment);
    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// deleting a comment and its replies.
app.delete("/replyke-comments", async (req: Request, res: Response) => {
    try {
        const { comment_id } = req.body;

        // Ensure comment_id is provided.
        if (!comment_id) {
            return res.status(400).send("Comment ID is required");
        }

        // Retrieve the target comment to initiate the delete operation.
        const targetComment: IComment | null = await Comment.findById(
            comment_id
        ).lean();
        if (!targetComment) {
            return res.status(404).send("Comment not found");
        }

        // Initialize counters for the number of deleted comments and replies.
        let firstLevelCommentsDeletedCount = 0;
        let repliesDeletedCount = 0;

        // Recursive function to delete a comment and its child comments (replies).
        async function deleteCommentAndChildren(commentId: string) {
            // We first delete the comment. If all good, we should get the comment document back.
            const comment: IComment | null = await Comment.findByIdAndDelete(
                commentId
            ).lean();

            if (!comment) {
                throw new Error("Comment deletion failed");
            }

            // Increment appropriate counters based on whether the comment is a reply.
            comment.parent ? repliesDeletedCount++ : firstLevelCommentsDeletedCount++;

            // Delete all child comments (replies) of the current comment.
            const childComments: IComment[] = await Comment.find({
                parent: comment._id,
            }).lean();
            for (const childComment of childComments) {
                await deleteCommentAndChildren(childComment._id);
            }
        }

        // Start the deletion process for the target comment and its replies.
        await deleteCommentAndChildren(comment_id);

        // Update the parent comment's reply count if the target comment was a reply.
        if (targetComment.parent) {
            await Comment.findByIdAndUpdate(targetComment.parent, {
                $inc: { replies_count: -1 },
            });
        }

        // Update the corresponding article's comment and reply counts.
        const article = await Article.findOneAndUpdate(
            { article_id: targetComment.article_id },
            {
                $inc: {
                    comments_count: -firstLevelCommentsDeletedCount,
                    replies_count: -repliesDeletedCount,
                },
            },
            { new: true }
        );

        if (!article) {
            throw new Error("Article not found for updating comment counts");
        }

        // Return the updated article data.
        return res.status(200).send(article);
    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// updating the content of a comment.
app.patch("/replyke-comments", async (req: Request, res: Response) => {
    try {
        const { update, comment_id } = req.body;

        // Validate the presence of update content and comment_id.
        if (!update || !comment_id) {
            return res.status(400).send("Update content and comment ID are required");
        }

        // Update the comment with the provided content.
        const updatedComment = await Comment.findOneAndUpdate(
            { _id: comment_id },
            { body: update },
            { new: true }
        );

        // If no comment was found or updated, return a 404 (Not Found) status.
        if (!updatedComment) {
            return res.status(404).send("Comment not found or update failed");
        }

        // Return the updated comment.
        return res.status(200).send(updatedComment);
    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// liking a comment.
app.post("/replyke-comments/like", async (req: Request, res: Response) => {
    try {
        const { comment_id, user_id } = req.body;

        // Validate the presence of comment_id and user_id.
        if (!comment_id || !user_id) {
            return res.status(400).send("Comment ID and user ID are required");
        }

        // Retrieve the comment to be liked.
        const comment: IComment | null = await Comment.findById(comment_id).lean();
        if (!comment) {
            return res.status(404).send("Comment not found");
        }

        // Check if the user has already liked the comment.
        if (comment.likes.includes(user_id)) {
            return res.status(409).send("User has already liked this comment");
        }

        // Update the comment with the new like.
        const updatedComment = await Comment.findByIdAndUpdate(
            comment_id,
            { $inc: { likes_count: 1 }, $push: { likes: user_id } },
            { new: true }
        );

        // Return the updated comment.
        return res.status(200).send(updatedComment);
    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

// unliking a comment.
app.post("/replyke-comments/unlike", async (req: Request, res: Response) => {
    try {
        const { comment_id, user_id } = req.body;

        // Validate the presence of comment_id and user_id.
        if (!comment_id || !user_id) {
            return res.status(400).send("Comment ID and user ID are required");
        }

        // Retrieve the comment to be unliked.
        const comment: IComment | null = await Comment.findById(comment_id).lean();
        if (!comment) {
            return res.status(404).send("Comment not found");
        }

        // Check if the user has liked the comment.
        if (!comment.likes.includes(user_id)) {
            return res.status(409).send("User hasn't liked this comment");
        }

        // Update the comment to remove the like.
        const updatedComment = await Comment.findByIdAndUpdate(
            comment_id,
            { $inc: { likes_count: -1 }, $pull: { likes: user_id } },
            { new: true }
        );

        // Return the updated comment.
        return res.status(200).send(updatedComment);
    } catch (err: any) {
        // Handle any server errors.
        return res.status(500).send({ error: "Server error" });
    }
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});