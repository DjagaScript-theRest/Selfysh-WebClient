import {  PipeTransform, Pipe } from '@angular/core';
import { IPost } from './post';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

    transform(value: IPost[], filterBy: string): IPost[] {
        console.log(value);
        console.log(filterBy);
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((post: IPost) =>
            post.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}