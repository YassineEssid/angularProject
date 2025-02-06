import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // Mock ElementRef and Renderer2
    const elementRefMock = {} as ElementRef;
    const rendererMock = {} as Renderer2;

    // Provide the mocked dependencies
    const directive = new HighlightDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
