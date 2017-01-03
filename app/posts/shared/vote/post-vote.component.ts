import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vote',
    templateUrl: './post-vote.component.html'
})
export class PostVoteComponent {
    @Input() voted: Boolean = false;
    @Input() hasVoting: Boolean = false;
    @Output() onVoted = new EventEmitter<any>();

    public vote(value: any): void {
        this.onVoted.emit(value);
    }
}