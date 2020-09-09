export const pixelsToRem = (size) => `${size / 16}rem`;

export const fontSize = (size) =>
  `font-size: ${size}px;font-size: ${pixelsToRem(size)};`;

export const media = {
  sm: '562px',
  md: '768px',
  lg: '992px',
};

export const passwordToggleStyle = {
  position: 'absolute',
  right: 0,
  padding: '0.375rem 0.75rem',
  cursor: 'pointer',
};
