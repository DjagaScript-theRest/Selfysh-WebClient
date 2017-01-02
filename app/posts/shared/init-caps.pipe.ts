import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
    transform(value: String, args?: any[]) {
        if (!value) { return value; }

        let newValue = value[0].toUpperCase() + value.substring(1, value.length);
        return newValue;
    }
}