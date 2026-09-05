export function getAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseWithoutLeadingSlash = cleanBase.startsWith('/') ? cleanBase.slice(1) : cleanBase;
  if (cleanPath.startsWith(baseWithoutLeadingSlash)) {
    return `/${cleanPath}`;
  }
  return `${cleanBase}${cleanPath}`;
}

