import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
  style?: ViewStyle;
  size?: 'sm' | 'md' | 'lg';
}

export default function FavoriteButton({
  isFavorite,
  onPress,
  style,
  size = 'md',
}: FavoriteButtonProps) {
  const sizeStyles = {
    sm: { padding: spacing.sm, fontSize: typography.lg },
    md: { padding: spacing.md, fontSize: typography.xxl },
    lg: { padding: spacing.lg, fontSize: 32 },
  };

  const currentSize = sizeStyles[size];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isFavorite && styles.buttonActive,
        { padding: currentSize.padding },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.icon,
          { fontSize: currentSize.fontSize },
          isFavorite && styles.iconActive,
        ]}
      >
        {isFavorite ? '♥' : '♡'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  buttonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  icon: {
    color: colors.textMuted,
  },
  iconActive: {
    color: colors.white,
  },
});
