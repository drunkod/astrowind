// fontUtils.ts

export interface FontConfig {
    family: string;
    url: string;
    format: string;
}

export const fontUtils = {
    // Load custom font
    async loadFont(file: File): Promise<FontConfig> {
        const url = URL.createObjectURL(file);
        const format = this.getFontFormat(file.name);
        const family = this.generateFontFamily(file.name);

        const fontFace = new FontFace(family, `url(${url})`, {
            style: 'normal',
            weight: '400'
        });

        try {
            const loadedFont = await fontFace.load();
            document.fonts.add(loadedFont);
            return { family, url, format };
        } catch (error) {
            throw new Error('Failed to load font');
        }
    },

    // Get font format from filename
    getFontFormat(filename: string): string {
        const ext = filename.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'ttf': return 'truetype';
            case 'otf': return 'opentype';
            case 'woff': return 'woff';
            case 'woff2': return 'woff2';
            default: return 'truetype';
        }
    },

    // Generate unique font family name
    generateFontFamily(filename: string): string {
        return `custom-font-${Date.now()}`;
    }
};