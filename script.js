// Зберігання інформації про ОС і браузер 
function saveSystemInfo() {
  const n = navigator;
  const info = {
    userAgent: n.userAgent,
    platform: (n.userAgentData && n.userAgentData.platform) || n.platform,
    browserBrands: n.userAgentData ? n.userAgentData.brands.map(b => b.brand + ' ' + b.version).join(', ') : 'н/д',
    vendor: n.vendor,
    language: n.language,
    languages: (n.languages || []).join(', '),
    cookieEnabled: n.cookieEnabled,
    onLine: n.onLine,
    hardwareConcurrency: n.hardwareConcurrency,
    deviceMemory: n.deviceMemory || 'н/д',
    screen: screen.width + 'x' + screen.height,
    colorDepth: screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };
  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, String(value));
  }
}

// Читання localStorage 
function renderStorageInfo() {
  const list = document.getElementById('storage-info');
  list.textContent = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.textContent = key + ': ' + localStorage.getItem(key);
    list.appendChild(li);
  }
}

saveSystemInfo();
renderStorageInfo();