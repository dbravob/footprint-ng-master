// Angular
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-forum',
	templateUrl: './forum.component.html',
	styleUrls: ['forum.component.scss']
})
export class ForumComponent {

    // Show dot on top of the icon
    @Input() dot: string;

    // Show pulse on icon
    @Input() pulse: boolean;

    @Input() pulseLight: boolean;

    // Set icon class name
    @Input() icon = 'flaticon2-bell-alarm-symbol';
    @Input() iconType: '' | 'success';

    // Set true to icon as SVG or false as icon class
    @Input() useSVG: boolean;

    // Set bg image path
    @Input() bgImage: string;

    // Set skin color, default to light
    @Input() skin: 'light' | 'dark' = 'light';

    @Input() type: 'brand' | 'success' = 'success';

	constructor(
        
		private router: Router,
    ) {
    }

    ngOnInit(){
    }

    loadForum(){
        this.router.navigateByUrl('/forum'); // Main page
    }
}
