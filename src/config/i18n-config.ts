// Centralized i18n configurations
export const I18N_CONFIG = {
    // 1st priority: The explicitly enabled standard baseline.
    DEFAULT_LANGUAGE: 'en',

    // 2nd priority: Fallback language utilized whenever an unmapped locale term is resolved
    FALLBACK_LANGUAGE: 'en',

    // Supported regions arrays restricting UI dropdown populations dynamically
    SUPPORTED_LOCALES: [
        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'bg', label: 'Български', flag: '🇧🇬' },
        { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
        { code: 'es', label: 'Español', flag: '🇪🇸' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' },
        { code: 'pl', label: 'Polski', flag: '🇵🇱' },
        { code: 'pt', label: 'Português', flag: '🇵🇹' },
        { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
        { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'ja', label: '日本語', flag: '🇯🇵' },
        { code: 'ko', label: '한국어', flag: '🇰🇷' },
        { code: 'ro', label: 'Română', flag: '🇷🇴' },
        { code: 'th', label: 'ไทย', flag: '🇹🇭' },
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
        { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    ] as const
};
