const panels: NodeListOf<HTMLElement> = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen(event: Event): void {
    (event.currentTarget as HTMLElement).classList.toggle('open');
}

function toggleActive(event: TransitionEvent): void {
    if(event.propertyName.includes('flex'))  (event.currentTarget as HTMLElement).classList.toggle('open-active');
}