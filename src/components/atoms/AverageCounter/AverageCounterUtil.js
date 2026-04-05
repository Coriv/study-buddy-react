export const resolveBackgroundColor = ({ theme, average }) => {
  if (average <= 2.1) {
    return theme.colors.error;
  }

  if (average <= 3.5) {
    return theme.colors.warning;
  }

  return theme.colors.success;
};
