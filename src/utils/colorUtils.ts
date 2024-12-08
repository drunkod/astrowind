// colorUtils.ts

export interface ColorScheme {
    textColor: string;
    backgroundColor: string;
    primaryButton: string;
    secondaryButton: string;
    accent: string;
}

export const colorUtils = {
    // Generate random color
    randomColor(): string {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    },

    // Generate random color scheme
    randomScheme(): ColorScheme {
        return {
            textColor: this.randomColor(),
            backgroundColor: this.randomColor(),
            primaryButton: this.randomColor(),
            secondaryButton: this.randomColor(),
            accent: this.randomColor(),
        };
    },

    // Export color scheme
    exportScheme(scheme: ColorScheme): string {
        return JSON.stringify(scheme, null, 2);
    },

    // Generate shareable URL
    generateShareableUrl(scheme: ColorScheme): string {
        const params = new URLSearchParams();
        Object.entries(scheme).forEach(([key, value]) => {
            params.append(key, value);
        });
        return `${window.location.origin}?${params.toString()}`;
    }
};