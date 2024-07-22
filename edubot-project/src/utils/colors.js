import { TinyColor } from '@ctrl/tinycolor';
export const gradientColors = ['#5271FF', '#47B7D9'];

export const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
export const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
