import { NativeModules, Platform } from 'react-native';
import { I18n } from '@aws-amplify/core';

let langRegionLocale = 'ja';

// If we have an Android phone
if (Platform.OS === 'android') {
  langRegionLocale = NativeModules.I18nManager.localeIdentifier || '';
} else if (Platform.OS === 'ios') {
  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || '';
}

const authScreenLabels = {
  ja: {
    'Forgot your password?': 'パスワードを忘れた場合',
    'Reset password': 'パスワードをリセット',
    'No account?': 'アカウントを持っていない場合',
    'Create account': 'サインアップ',
  },
};

I18n.putVocabularies(authScreenLabels);
I18n.setLanguage('ja');

export const Localei18n = () => null;
