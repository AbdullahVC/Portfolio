// Tek doğruluk kaynağı — Impressum / yasal iletişim verisi.
// Kullanıcı (2026-06-05) tarafından doğrulandı: Türkiye'de mukim, şirket yok,
// şehir-bazlı hafif Impressum tercih edildi, telefon görünür.

export const OPERATOR = {
  // Kimlikteki tam yasal ad
  legalName: 'Abdullah Veysel Çoşkun',

  // Türkiye'de mukim — şirket yok, şehir bazlı (tam sokak adresi gizli)
  showAddress: true,
  locality: 'Sakarya',
  country: 'Türkiye / Turkey',

  email: 'info@abdullahvcoskun.dev',

  // Impressum'da görünür
  phone: '+90 537 354 57 93',

  // Henüz şirket/şahıs işletmesi yok → vergi no yok
  taxId: '',
} as const;

export function hasPlaceholders(): boolean {
  return JSON.stringify(OPERATOR).includes('«PLACEHOLDER');
}
