// Online/offline durumu için TEK doğruluk kaynağı.
// 06:00–23:00 yerel saat arası "online", dışında "offline".
// Hem Header (nav göstergesi) hem Hero (StatusLine) bunu kullanır;
// pencere değişecekse yalnızca burayı düzenle.
export const ONLINE_FROM = 6;
export const ONLINE_UNTIL = 23;

export function isOnlineNow(date: Date = new Date()): boolean {
  const h = date.getHours();
  return h >= ONLINE_FROM && h < ONLINE_UNTIL;
}
