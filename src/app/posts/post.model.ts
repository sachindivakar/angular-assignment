export interface Post{
    title: string;
    content: string;
    postId: string;
    image?: string | File;
    createdBy?:{
      email: string
    }
}
