function parseENName(en: string, name: string): string {
    return en ? `${en} ${name || ''}` : '';
}
