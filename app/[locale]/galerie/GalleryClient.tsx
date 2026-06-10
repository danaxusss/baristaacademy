'use client';

import { useMemo, useState } from 'react';
import { gallery } from '@/lib/content';
import type { Locale } from '@/lib/config';

const filters = ['all', 'lab', 'latte', 'brewing', 'students', 'certificates'];

export function GalleryClient({ locale }: { locale: Locale }) {
  const [active, setActive] = useState('all');
  const items = useMemo(() => active === 'all' ? gallery : gallery.filter((g) => g.category === active), [active]);
  return (
    <>
      <div className="filters">{filters.map((f) => <button className={`filter ${active === f ? 'active' : ''}`} key={f} onClick={() => setActive(f)}>{f === 'all' ? (locale === 'fr' ? 'Tout' : 'الكل') : f}</button>)}</div>
      <div className="gallery">{items.map((item) => <div className="tile" key={item.id} style={{ background: item.color }}><span>{item[locale]}</span></div>)}</div>
    </>
  );
}
