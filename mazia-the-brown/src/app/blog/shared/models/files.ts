import * as moment from 'moment';

export class Image {
    $key: string;
    file: File;
    name: string;
    url: string;
    progress:number;
    createdAt = moment().format('DD MMMM YYYY');

    constructor(file:File) {
        this.file = file;
    }
}