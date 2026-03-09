import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors, spacing, typography } from '../theme';

interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: ViewStyle;
}

export default function SearchBar({
  containerStyle,
  placeholder = 'Rechercher une recette...',
  placeholderTextColor = colors.textMuted,
  ...textInputProps
}: SearchBarProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType="search"
        {...textInputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
  },
  input: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontSize: typography.md,
    color: colors.text,
    borderWidth: 2,
    borderColor: colors.border,
  },
});
