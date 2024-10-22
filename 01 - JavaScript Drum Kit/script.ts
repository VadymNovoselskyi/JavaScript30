const keyElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('div.key');
keyElements.forEach((key: HTMLDivElement) => {
    key.addEventListener('transitionend', () => {
        key.classList.remove('playing');
})});

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event: KeyboardEvent): void {
    handlePlay(event.key.toUpperCase());
}

function handlePlay(key: string): void {
    const audioElement = document.querySelector(`audio[data-key="${key}"]`) as HTMLAudioElement | null;
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        const keyElement = document.querySelector(`div[data-key="${key}"]`) as HTMLDivElement;
        keyElement.classList.add('playing');
    }
}
