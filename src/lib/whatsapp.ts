/**
 * Opens WhatsApp with a pre-filled message.
 * - Tries multiple URL schemes depending on device
 * - Prefers opening in a new tab to avoid iframe/navigation issues
 * - Falls back to top-level navigation if popups are blocked
 */
export function openWhatsApp(phoneRaw: string, message: string): boolean {
  const phone = phoneRaw.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Build a list of candidate URLs in order of preference
  const urls = isMobile
    ? [
        // Native app scheme (most reliable on mobile when allowed)
        `whatsapp://send?phone=${phone}&text=${encodedMessage}`,
        // Web/mobile HTTP fallbacks
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`,
        `https://wa.me/${phone}?text=${encodedMessage}`,
      ]
    : [
        // Desktop web first
        `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`,
        // Universal short link
        `https://wa.me/${phone}?text=${encodedMessage}`,
      ];

  const tryOpen = (url: string) => {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    return !!(win && !win.closed);
  };

  for (const url of urls) {
    if (tryOpen(url)) return true;
  }

  // Could not open automatically; let caller handle fallback UI
  return false;
}


