import type { Metadata } from 'next';
import { type Locale } from '@/lib/config';
import { seo } from '@/lib/content';
import { FinalCta } from '../components/SiteChrome';
import { GalleryClient } from './GalleryClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return seo[locale].galerie;
}

export default async function Galerie({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = seo[locale].galerie;
  return <main><section className="section"><div className="container section-head"><span className="eyebrow">Urban Coffee Lab</span><h1>{data.title}</h1><p>{data.description}</p></div></section><section className="section"><div className="container"><GalleryClient locale={locale} /></div></section><FinalCta locale={locale} /></main>;
}
