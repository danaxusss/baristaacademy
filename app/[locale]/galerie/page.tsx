import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/config';
import { seo } from '@/lib/content';
import { FinalCta } from '../components/SiteChrome';
import { GalleryClient } from './GalleryClient';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return seo[locale].galerie;
}

export default async function Galerie({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = seo[locale].galerie;
  return <main><section className="section"><div className="container section-head"><span className="eyebrow">Urban Coffee Lab</span><h1>{data.title}</h1><p>{data.description}</p></div></section><section className="section"><div className="container"><GalleryClient locale={locale} /></div></section><FinalCta locale={locale} /></main>;
}
