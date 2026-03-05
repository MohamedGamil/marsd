// Centralized i18n configurations
export const I18N_CONFIG = {
    // 1st priority: The explicitly enabled standard baseline.
    DEFAULT_LANGUAGE: 'en',

    // 2nd priority: Fallback language utilized whenever an unmapped locale term is resolved
    FALLBACK_LANGUAGE: 'en',

    // Supported regions arrays restricting UI dropdown populations dynamically
    SUPPORTED_LOCALES: [
        { code: 'ar', label: 'العربية', dir: 'rtl', flag: '🇸🇦' },
        { code: 'en', label: 'English', dir: 'ltr', flag: '🇬🇧' },
        { code: 'bg', label: 'Български', dir: 'ltr', flag: '🇧🇬' },
        { code: 'cs', label: 'Čeština', dir: 'ltr', flag: '🇨🇿' },
        { code: 'zh', label: '中文', dir: 'ltr', flag: '🇨🇳' },
        { code: 'fr', label: 'Français', dir: 'ltr', flag: '🇫🇷' },
        { code: 'de', label: 'Deutsch', dir: 'ltr', flag: '🇩🇪' },
        { code: 'el', label: 'Ελληνικά', dir: 'ltr', flag: '🇬🇷' },
        { code: 'es', label: 'Español', dir: 'ltr', flag: '🇪🇸' },
        { code: 'it', label: 'Italiano', dir: 'ltr', flag: '🇮🇹' },
        { code: 'pl', label: 'Polski', dir: 'ltr', flag: '🇵🇱' },
        { code: 'pt', label: 'Português', dir: 'ltr', flag: '🇵🇹' },
        { code: 'nl', label: 'Nederlands', dir: 'ltr', flag: '🇳🇱' },
        { code: 'sv', label: 'Svenska', dir: 'ltr', flag: '🇸🇪' },
        { code: 'ru', label: 'Русский', dir: 'ltr', flag: '🇷🇺' },
        { code: 'ja', label: '日本語', dir: 'ltr', flag: '🇯🇵' },
        { code: 'ko', label: '한국어', dir: 'ltr', flag: '🇰🇷' },
        { code: 'ro', label: 'Română', dir: 'ltr', flag: '🇷🇴' },
        { code: 'th', label: 'ไทย', dir: 'ltr', flag: '🇹🇭' },
        { code: 'tr', label: 'Türkçe', dir: 'ltr', flag: '🇹🇷' },
        { code: 'vi', label: 'Tiếng Việt', dir: 'ltr', flag: '🇻🇳' },
    ] as const
};
