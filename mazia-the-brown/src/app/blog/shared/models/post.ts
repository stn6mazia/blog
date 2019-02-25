import * as moment from 'moment';

export class Post {
    title: string;
    content: string;
    author: string;
    category: string;
    postImage: string;
    postDate = moment().format('DD MMMM YYYY');
    likes: number = 0;
}