'use client';

import { useMemo, useState } from 'react';
import { academyConfig, type Locale } from '@/lib/config';

const initial = { name: '', phone: '', email: '', city: '', level: '', formation: '', session: '', goal: '', note: '' };

export function RegistrationForm({ locale }: { locale: Locale }) {
  const [form, setForm] = useState(initial);
  const update = (key: keyof typeof initial, value: string) => setForm((f) => ({ ...f, [key]: value }));
  const message = useMemo(() => {
    if (locale === 'fr') return `Bonjour Barista Moroccan Academy, je souhaite me préinscrire.\nNom: ${form.name}\nTéléphone: ${form.phone}\nEmail: ${form.email}\nVille: ${form.city}\nNiveau: ${form.level}\nFormation: ${form.formation}\nSession: ${form.session}\nObjectif: ${form.goal}\nMessage: ${form.note}`;
    return `السلام عليكم أكاديمية الباريستا المغربية، أريد التسجيل الأولي.\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالبريد: ${form.email}\nالمدينة: ${form.city}\nالمستوى: ${form.level}\nالتكوين: ${form.formation}\nالدورة: ${form.session}\nالهدف: ${form.goal}\nملاحظة: ${form.note}`;
  }, [form, locale]);
  const labels = locale === 'fr' ? {
    name: 'Nom complet', phone: 'Téléphone WhatsApp', email: 'Email', city: 'Ville', level: 'Niveau café', formation: 'Formation souhaitée', session: 'Session préférée', goal: 'Objectif', note: 'Message', send: 'Envoyer sur WhatsApp', copy: 'Message de suivi WhatsApp'
  } : {
    name: 'الاسم الكامل', phone: 'هاتف واتساب', email: 'البريد الإلكتروني', city: 'المدينة', level: 'مستوى القهوة', formation: 'التكوين المطلوب', session: 'الدورة المفضلة', goal: 'الهدف', note: 'رسالة', send: 'إرسال عبر واتساب', copy: 'رسالة المتابعة على واتساب'
  };
  return (
    <div className="form-card">
      <div className="form-grid">
        <label>{labels.name}<input value={form.name} onChange={(e) => update('name', e.target.value)} /></label>
        <label>{labels.phone}<input value={form.phone} onChange={(e) => update('phone', e.target.value)} /></label>
        <label>{labels.email}<input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} /></label>
        <label>{labels.city}<input value={form.city} onChange={(e) => update('city', e.target.value)} /></label>
        <label>{labels.level}<select value={form.level} onChange={(e) => update('level', e.target.value)}><option /> <option>Beginner / مبتدئ</option><option>Intermediate / متوسط</option><option>Professional / مهني</option></select></label>
        <label>{labels.formation}<select value={form.formation} onChange={(e) => update('formation', e.target.value)}><option /><option>Essential Barista</option><option>Professional Barista</option><option>Coffee Shop Business</option></select></label>
        <label className="full">{labels.session}<select value={form.session} onChange={(e) => update('session', e.target.value)}><option />{academyConfig.sessionDates.map((s) => <option key={s.id}>{s[locale]}</option>)}</select></label>
        <label className="full">{labels.goal}<input value={form.goal} onChange={(e) => update('goal', e.target.value)} /></label>
        <label className="full">{labels.note}<textarea value={form.note} onChange={(e) => update('note', e.target.value)} /></label>
      </div>
      <h3 style={{marginTop: 24}}>{labels.copy}</h3>
      <textarea readOnly value={message} />
      <p className="notice">Lead statuses: {academyConfig.leadStatuses.join(' · ')}</p>
      <a className="cta" href={`https://wa.me/${academyConfig.whatsapp}?text=${encodeURIComponent(message)}`}>{labels.send}</a>
    </div>
  );
}
