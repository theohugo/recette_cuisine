import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';

export const layoutStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.md,
  },
  contentContainer: {
    paddingBottom: spacing.xxl,
  },
});
