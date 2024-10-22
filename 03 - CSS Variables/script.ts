const form = document.querySelector('form.controls') as HTMLFormElement;

function handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const suffix: string = input.dataset?.sizing ?? '';
    document.documentElement.style.setProperty(`--${input.name}`, `${input.value}${suffix}`);
}

form.addEventListener('input', handleInput);