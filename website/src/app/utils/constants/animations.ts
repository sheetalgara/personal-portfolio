import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const slideUp = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translateY(10%)', opacity: 0 }),
    animate(
      '600ms ease-in',
      style({ transform: 'translateY(0)', opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '600ms ease-out',
      style({ transform: 'translateY(10%)', opacity: 0 })
    )
  ])
]);

export const slideLeft = trigger('slideLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 1 }),
    animate(
      '250ms ease-in',
      style({ transform: 'translateX(0)', opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    animate(
      '250ms ease-out',
      style({ transform: 'translateX(-100%)', opacity: 0 })
    )
  ])
]);

export const slideDown = trigger('slideDown', [
  transition(':enter', [
    style({ transform: 'translateY(10%)', opacity: 0 }),
    animate(
      '600ms ease-in',
      style({ transform: 'translateY(0)', opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '600ms ease-out',
      style({ transform: 'translateY(10%)', opacity: 0 })
    )
  ])
]);

export const disappear = trigger('disappear', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(1500, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate(1000, style({ opacity: 0 }))
  ])
]);

