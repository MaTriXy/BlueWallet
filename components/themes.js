import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  scanImage: require('../img/scan.png'),
  colors: {
    ...DefaultTheme.colors,
    brandingColor: '#ffffff',
    foregroundColor: '#0c2550',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    buttonBackgroundColor: '#ccddf9',
    buttonTextColor: '#0c2550',
    buttonAlternativeTextColor: '#2f5fb3',
    buttonDisabledBackgroundColor: '#eef0f4',
    buttonDisabledTextColor: '#9aa0aa',
    inputBorderColor: '#d2d2d2',
    inputBackgroundColor: '#f5f5f5',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#0f5cc0',
    buttonBlueBackgroundColor: '#ccddf9',
    incomingBackgroundColor: '#d2f8d6',
    incomingForegroundColor: '#37c0a1',
    outgoingBackgroundColor: '#f8d2d2',
    outgoingForegroundColor: '#d0021b',
    successColor: '#37c0a1',
    failedColor: '#ff0000',
    shadowColor: '#000000',
    inverseForegroundColor: '#ffffff',
    hdborderColor: '#68BBE1',
    hdbackgroundColor: '#ECF9FF',
    lnborderColor: '#F7C056',
    lnbackgroundColor: '#FFFAEF',
    background: '#FFFFFF',
    customHeader: 'rgba(0,0,0,0)',
    lightButton: '#eef0f4',
    ballReceive: '#d2f8d6',
    ballOutgoing: '#f8d2d2',
    lightBorder: '#ededed',
    ballOutgoingExpired: '#EEF0F4',
    modal: '#ffffff',
    formBorder: '#d2d2d2',
    modalButton: '#ccddf9',
    darkGray: '#9AA0AA',
    scanLabel: '#9AA0AA',
    feeText: '#81868e',
    feeLabel: '#d2f8d6',
    feeValue: '#37c0a1',
    labelText: '#81868e',
    cta2: '#062453',
    outputValue: '#13244D',
    elevated: '#ffffff',
    mainColor: '#CFDCF6',
    success: '#ccddf9',
    successCheck: '#0f5cc0',
    warning: '#007AFF',
    warningText: '#ffffff',
    msSuccessBG: '#37c0a1',
    msSuccessCheck: '#ffffff',
  },
};

export const BlueDarkTheme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    brandingColor: '#000000',
    borderTopColor: '#9aa0aa',
    foregroundColor: '#ffffff',
    buttonDisabledBackgroundColor: '#3A3A3C',
    buttonBackgroundColor: '#3A3A3C',
    customHeader: '#000000',
    buttonTextColor: '#ffffff',
    lightButton: 'rgba(255,255,255,.1)',
    buttonAlternativeTextColor: '#ffffff',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#0A84FF',
    ballReceive: '#202020',
    ballOutgoing: '#202020',
    lightBorder: '#313030',
    ballOutgoingExpired: '#202020',
    modal: '#202020',
    formBorder: '#202020',
    inputBackgroundColor: '#262626',
    modalButton: '#000000',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#000000',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#121212',
    mainColor: '#0A84FF',
    success: '#202020',
    successCheck: '#0A84FF',
    buttonBlueBackgroundColor: '#202020',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    warning: '#8EFFE5',
    warningText: '#000000',
    msSuccessBG: '#8EFFE5',
    msSuccessCheck: '#000000',
  },
};

export class BlueCurrentTheme {
  static updateColorScheme() {
    const isColorSchemeDark = Appearance.getColorScheme() === 'dark';
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
  }
}

BlueCurrentTheme.updateColorScheme();
