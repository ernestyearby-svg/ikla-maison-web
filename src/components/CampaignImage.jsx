import React, { useState } from 'react';
import { getAssetPath } from '../utils/assets.js';

/**
 * Luxury Campaign Image Component
 * - Prevents Cumulative Layout Shift (CLS) with explicit aspect-ratio container
 * - Supports high-performance lazy loading below fold and eager for LCP
 * - Conceals social UI artifacts on reference crops via deliberate framing & object-position
 * - Provides graceful luxury placeholder shimmer while loading
 */
export default function CampaignImage({
  src,
  alt = '',
  aspectRatio = '4/3',
  fit = 'cover',
  position = 'center',
  priority = false,
  className = '',
  imgClassName = '',
  framed = false,
  badge = null,
  onClick = null,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const resolvedSrc = getAssetPath(src);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#F5F2EC] ${
        framed ? 'border border-[#DDD7CB] shadow-xs' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      {/* Background warm shimmer placeholder until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0ECE1] via-[#FAF7F2] to-[#F0ECE1] animate-pulse pointer-events-none" />
      )}

      <img
        src={resolvedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-all duration-700 ${
          fit === 'contain' ? 'object-contain' : 'object-cover'
        } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        style={{
          objectPosition: position,
        }}
      />

      {badge && (
        <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
          {badge}
        </div>
      )}
    </div>
  );
}
