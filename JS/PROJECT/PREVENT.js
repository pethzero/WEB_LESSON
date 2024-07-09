   (keydown)="preventSpace($event)"


    isInvalid(item: string): boolean {
    let trimmedItem = typeof item === 'string' ? item.trim() : '';
    return trimmedItem === '';
  }
  preventSpace(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
    }
  }