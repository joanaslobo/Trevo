/**
 * Centralized color theme definitions for the Trevo website.
 * This file provides a consistent color palette that automatically
 * switches between Light & Fun mode and Rock & Roll mode.
 */

import { useTheme } from '@/lib/theme-context';

// Hook to get the current theme colors
export function useThemeColors() {
  const { isRockMode } = useTheme();

  return {
    // Backgrounds
    bgGradientFrom: isRockMode ? "#0b0b0b" : "#F7F3E3",
    bgGradientTo: isRockMode ? "#1a1a1a" : "#e6f5ec",
    bgColor: isRockMode ? "#121212" : "#F7F3E3",
    cardBg: isRockMode ? "#1e1e1e" : "#ffffff",
    footerBg: isRockMode ? "#121212" : "#1a7a3d",
    
    // Core palette 
    primary: isRockMode ? "#fefefe" : "#1a7a3d",
    secondary: isRockMode ? "#ff005c" : "#c66b3e",
    accent: isRockMode ? "#00c3ff" : "#f4b942",
    
    // Text colors
    text: isRockMode ? "#f0f0f0" : "#333333",
    textLight: isRockMode ? "#aaaaaa" : "#666666",
    footerText: isRockMode ? "#777777" : "#9dd6b7",
    
    // Button colors
    primaryBtnBg: isRockMode ? "#ff005c" : "#1a7a3d",
    primaryBtnHover: isRockMode ? "#ff014b" : "#156e35",
    
    secondaryBtnBg: isRockMode ? "#00c3ff" : "#c66b3e",
    secondaryBtnHover: isRockMode ? "#00b1ee" : "#b35c35",
    
    accentBtnBg: isRockMode ? "#00c3ff" : "#f4b942",
    accentBtnHover: isRockMode ? "#00b1ee" : "#e79c0d",
    
    btnText: isRockMode ? "#ffffff" : "#ffffff",
    
    // Border colors
    border: isRockMode ? "#333333" : "#e2e8f0",
    inputBorder: isRockMode ? "#444444" : "#e2e8f0",
    
    // Form elements 
    inputBg: isRockMode ? "#2a2a2a" : "#ffffff",
    inputText: isRockMode ? "#ffffff" : "#333333",
    inputFocus: isRockMode ? "#ff005c" : "#1a7a3d",
    
    // Special elements
    contactBtnBg: isRockMode ? "#00c3ff" : "#c66b3e",
    contactBtnHover: isRockMode ? "#ff005c" : "#b35c35",
    contactBtnText: isRockMode ? "#0b0b0b" : "#ffffff",

    exploreBtnBorder: isRockMode ? "#00c3ff" : "#1a7a3d",
    exploreBtnHoverBg: isRockMode ? "#ff005c" : "#1a7a3d",
    exploreBtnHoverText: isRockMode ? "#fefefe" : "#ffffff",

    // Decorative elements
    swirlBg1: isRockMode ? "#ff005c33" : "#f4b94233",
    swirlBg2: isRockMode ? "#00c3ff22" : "#c66b3e22", 

    // Icons and symbols
    peaceSymbol: isRockMode ? "#fefefe" : "#c66b3e",
    shamrock: isRockMode ? "#ffffff" : "#1a7a3d",
    musicNote1: isRockMode ? "#ff009e" : "#f4b942",
    musicNote2: isRockMode ? "#00f7ff" : "#c66b3e",
    musicNote3: isRockMode ? "#00f7ff" : "#1a7a3d",
  };
}