"use client";

import { useEffect, useId, useMemo, useState, type FormEvent, type ReactNode } from "react";
import calendar from "@/data/dates.json";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { useLocale } from "@/components/providers";
import {
  DRESS_TYPES,
  fittingMessage,
  formatDay,
  hennaMessage,
  isoDay,
  isPhone,
  SLOTS,
  takenDates,
  waLink,
  WISHES,
  type DressType,
  type Slot,
  type Wish,
} from "@/lib/booking";
import { intlLocale } from "@/lib/locales";

export type Tab = "fitting" | "henna";
type Errors = Partial<Record<"name" | "phone", string>>;
export type Prefill = { tab?: Tab; dress?: DressType; message?: string };

/** Ouvre le formulaire sur le bon onglet (et préremplit), puis y fait défiler la page. */
export function openBooking(p: Prefill) {
  window.dispatchEvent(new CustomEvent<Prefill>("book-prefill", { detail: p }));
  const el = document.getElementById("contact");
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Field({ label, hint, error, children, id }: { label: ReactNode; hint?: string; error?: string; children: ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {children}
      {hint && <p className="mt-2 text-[0.8125rem] leading-relaxed text-gold-ink">{hint}</p>}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-2 text-[0.8125rem] text-henna">
          {error}
        </p>
      )}
    </div>
  );
}

function Choices<T extends string>({ name, label, options, labels, value, onChange }: { name: string; label: ReactNode; options: readonly T[]; labels: Record<T, string>; value: T | ""; onChange: (v: T) => void }) {
  const id = useId();
  return (
    <div>
      <p className="label" id={id}>
        {label}
      </p>
      <div role="radiogroup" aria-labelledby={id} className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="chip">
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
            {labels[o]}
          </label>
        ))}
      </div>
    </div>
  );
}

function Legend({ n, children }: { n: string; children: ReactNode }) {
  return (
    <legend className="mb-8 flex items-baseline gap-4">
      <span className="num text-[0.9375rem] text-gold-ink" dir="ltr">
        {n}
      </span>
      <span className="display text-[1.8rem] rtl:text-[1.6rem]">{children}</span>
    </legend>
  );
}

/** Calendrier des dates déjà prises (data/dates.json) : affiché seulement s'il y en a. */
function TakenCalendar({ value, onPick, today }: { value: string; onPick: (iso: string) => void; today: string }) {
  const { lang, d } = useLocale();
  const c = d.booking.calendar;
  const start = (value || today || isoDay(new Date())).slice(0, 7);
  const [month, setMonth] = useState(start);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- suit la date choisie dans le champ
  useEffect(() => setMonth(start), [start]);

  const [y, m] = month.split("-").map(Number);
  const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay(); // semaine israélienne : dimanche en premier
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const shift = (n: number) => {
    const dt = new Date(Date.UTC(y, m - 1 + n, 1));
    setMonth(`${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}`);
  };
  const weekdays = useMemo(() => Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(intlLocale[lang], { weekday: "narrow", timeZone: "UTC" }).format(new Date(Date.UTC(2024, 0, 7 + i)))), [lang]);

  return (
    <div className="mt-5 border border-line p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => shift(-1)} aria-label={c.prev} className="flex h-10 w-10 items-center justify-center hover:text-gold-ink">
          <ArrowIcon className="h-3.5 w-3.5 -scale-x-100 rtl:scale-x-100" />
        </button>
        <p className="text-[0.9375rem]" aria-live="polite">
          {formatDay(`${month}-01`, lang, { month: "long", year: "numeric" })}
        </p>
        <button type="button" onClick={() => shift(1)} aria-label={c.next} className="flex h-10 w-10 items-center justify-center hover:text-gold-ink">
          <ArrowIcon className="h-3.5 w-3.5 rtl:-scale-x-100" />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[0.8125rem]" aria-label={c.title}>
        {weekdays.map((w, i) => (
          <span key={i} className="pb-1 text-muted" aria-hidden="true">
            {w}
          </span>
        ))}
        {Array.from({ length: first }, (_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: days }, (_, i) => {
          const iso = `${month}-${String(i + 1).padStart(2, "0")}`;
          const taken = takenDates.has(iso);
          const past = today !== "" && iso < today;
          const selected = iso === value;
          return (
            <button
              key={iso}
              type="button"
              disabled={past}
              onClick={() => onPick(iso)}
              aria-pressed={selected}
              aria-label={`${formatDay(iso, lang)}${taken ? ` · ${c.taken}` : ""}`}
              className={`flex h-9 items-center justify-center transition-colors ${selected ? "bg-ink text-ivory" : taken ? "bg-pearl text-muted/60 line-through" : past ? "text-muted/40" : "hover:bg-nude-soft"}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <p className="mt-3 flex items-center gap-2 text-[0.75rem] text-muted">
        <span className="inline-block h-3 w-3 bg-pearl" aria-hidden="true" />
        {c.taken}
        <span className="ms-auto">
          {c.updated} {formatDay(calendar.updated, lang, { day: "numeric", month: "short", year: "numeric" })}
        </span>
      </p>
    </div>
  );
}

/**
 * Formulaire à deux onglets.
 * Essayage : type de robe, date de l'événement, date et créneau souhaités, taille (facultatif), coordonnées.
 * Soirée henné : date, lieu, invités, envies, budget (facultatif), coordonnées.
 * Le récapitulatif part sur le WhatsApp de Revital, dans la langue de la visiteuse. Rien n'est stocké.
 */
export function BookingForm({ initialTab = "fitting", initialDress }: { initialTab?: Tab; initialDress?: DressType }) {
  const { lang, d } = useLocale();
  const b = d.booking;
  const f = b.fields;
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [tab, setTab] = useState<Tab>(initialTab);
  // Essayage
  const [dress, setDress] = useState<DressType | "">(initialDress ?? "");
  const [eventDate, setEventDate] = useState("");
  const [fittingDate, setFittingDate] = useState("");
  const [slot, setSlot] = useState<Slot | "">("");
  const [size, setSize] = useState("");
  // Henné
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [guests, setGuests] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [budget, setBudget] = useState("");
  // Commun
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);
  const [today, setToday] = useState("");

  // eslint-disable-next-line react-hooks/set-state-in-effect -- date du jour lue une fois au montage
  useEffect(() => setToday(isoDay(new Date())), []);

  useEffect(() => {
    const onPick = (e: Event) => {
      const p = (e as CustomEvent<Prefill>).detail;
      if (p.tab) setTab(p.tab);
      if (p.dress) setDress(p.dress);
      if (p.message) setMessage(p.message);
      setSent(null);
    };
    window.addEventListener("book-prefill", onPick);
    return () => window.removeEventListener("book-prefill", onPick);
  }, []);

  const valid = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v);
  const dateHint = valid(date) && takenDates.size > 0 ? (takenDates.has(date) ? f.dateTaken : f.dateFree) : undefined;

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e: Errors = {};
    if (!name.trim()) e.name = b.required;
    if (!phone.trim()) e.phone = b.required;
    else if (!isPhone(phone)) e.phone = b.invalidPhone;
    setErrors(e);
    const first = (["name", "phone"] as const).find((k) => e[k]);
    if (first) {
      document.getElementById(id(first))?.focus();
      return;
    }
    const common = { name: name.trim(), phone: phone.trim(), message: message.trim() };
    const text =
      tab === "fitting"
        ? fittingMessage({ dress, eventDate: valid(eventDate) ? eventDate : "", fittingDate: valid(fittingDate) ? fittingDate : "", slot, size: size.trim(), ...common }, lang, d)
        : hennaMessage({ date: valid(date) ? date : "", place: place.trim(), guests: guests.trim(), wishes, budget: budget.trim(), ...common }, lang, d);
    const url = waLink(text);
    window.open(url, "_blank", "noopener");
    setSent(url);
  };

  const err = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${id(k)}-err` } : {});
  const optional = <span className="normal-case tracking-normal opacity-80">({f.optional})</span>;

  if (sent)
    return (
      <div className="fade-in py-6 text-center md:py-10" role="status">
        <p className="display text-[3rem] leading-none text-gold-ink italic">{b.success.thanks}</p>
        <h3 className="display mt-5 text-[1.9rem]">{b.success.title}</h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">{b.success.text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={sent} target="_blank" rel="noopener noreferrer" className="btn-solid">
            <WhatsAppIcon className="h-4 w-4" />
            {b.success.again}
          </a>
          <button type="button" onClick={() => setSent(null)} className="link-line nav-link">
            {b.success.reset}
          </button>
        </div>
      </div>
    );

  const tabs: Tab[] = ["fitting", "henna"];

  return (
    <div>
      <div role="tablist" aria-label={b.tabsLabel} className="mb-12 grid grid-cols-2 border-b border-line">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            id={id(`tab-${t}`)}
            aria-selected={tab === t}
            aria-controls={id("panel")}
            onClick={() => setTab(t)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                const next = t === "fitting" ? "henna" : "fitting";
                setTab(next);
                document.getElementById(id(`tab-${next}`))?.focus();
              }
            }}
            tabIndex={tab === t ? 0 : -1}
            className={`nav-link -mb-px min-h-12 border-b pb-3 transition-colors duration-500 ${tab === t ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"}`}
          >
            {b.tabs[t]}
          </button>
        ))}
      </div>

      <form id={id("panel")} role="tabpanel" aria-labelledby={id(`tab-${tab}`)} onSubmit={onSubmit} noValidate className="space-y-14">
        {tab === "fitting" ? (
          <>
            <fieldset className="space-y-8">
              <Legend n="01">{b.steps.dress}</Legend>
              <Choices name="dress" label={f.dressType} options={DRESS_TYPES} labels={f.dressTypes} value={dress} onChange={setDress} />
              <div className="grid gap-8 sm:grid-cols-2">
                <Field id={id("eventDate")} label={f.eventDate}>
                  <input id={id("eventDate")} name="eventDate" type="date" min={today || undefined} value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="field" />
                </Field>
                <Field id={id("size")} label={<>{f.size} {optional}</>}>
                  <input id={id("size")} name="size" type="text" placeholder={f.sizePlaceholder} value={size} onChange={(e) => setSize(e.target.value)} className="field" maxLength={20} />
                </Field>
              </div>
            </fieldset>
            <fieldset className="space-y-8">
              <Legend n="02">{b.steps.fitting}</Legend>
              <Field id={id("fittingDate")} label={f.fittingDate}>
                <input id={id("fittingDate")} name="fittingDate" type="date" min={today || undefined} value={fittingDate} onChange={(e) => setFittingDate(e.target.value)} className="field sm:max-w-[16rem]" />
              </Field>
              <Choices name="slot" label={f.slot} options={SLOTS} labels={f.slots} value={slot} onChange={setSlot} />
            </fieldset>
          </>
        ) : (
          <>
            <fieldset className="space-y-8">
              <Legend n="01">{b.steps.event}</Legend>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field id={id("date")} label={f.date} hint={dateHint}>
                  <input id={id("date")} name="date" type="date" min={today || undefined} value={date} onChange={(e) => setDate(e.target.value)} className="field" />
                </Field>
                <Field id={id("guests")} label={f.guests}>
                  <input id={id("guests")} name="guests" type="number" inputMode="numeric" min={1} max={2000} value={guests} onChange={(e) => setGuests(e.target.value)} className="field" />
                </Field>
              </div>
              {takenDates.size > 0 && <TakenCalendar value={valid(date) ? date : ""} onPick={setDate} today={today} />}
              <Field id={id("place")} label={f.place}>
                <input id={id("place")} name="place" type="text" autoComplete="address-level2" placeholder={f.placePlaceholder} value={place} onChange={(e) => setPlace(e.target.value)} className="field" maxLength={160} />
              </Field>
            </fieldset>
            <fieldset className="space-y-8">
              <Legend n="02">{b.steps.wishes}</Legend>
              <div>
                <p className="label">{f.wishes}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {WISHES.map((w) => (
                    <label key={w} className="chip">
                      <input
                        type="checkbox"
                        name="wishes"
                        value={w}
                        checked={wishes.includes(w)}
                        onChange={(e) => setWishes((cur) => (e.target.checked ? [...cur.filter((x) => (w === "all" ? false : x !== "all")), w] : cur.filter((x) => x !== w)))}
                        className="sr-only"
                      />
                      {f.wishesOptions[w]}
                    </label>
                  ))}
                </div>
              </div>
              <Field id={id("budget")} label={<>{f.budget} {optional}</>}>
                <input id={id("budget")} name="budget" type="text" placeholder={f.budgetPlaceholder} value={budget} onChange={(e) => setBudget(e.target.value)} className="field sm:max-w-[16rem]" maxLength={40} />
              </Field>
            </fieldset>
          </>
        )}

        <fieldset className="space-y-8">
          <Legend n="03">{b.steps.contact}</Legend>
          <div className="grid gap-8 sm:grid-cols-2">
            <Field id={id("name")} label={`${f.name} *`} error={errors.name}>
              <input id={id("name")} name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className="field" maxLength={120} {...err("name")} />
            </Field>
            <Field id={id("phone")} label={`${f.phone} *`} error={errors.phone}>
              <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" required dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} className="field rtl:text-end" maxLength={30} {...err("phone")} />
            </Field>
          </div>
          <Field id={id("message")} label={<>{f.message} {optional}</>}>
            <textarea id={id("message")} name="message" rows={3} placeholder={f.messagePlaceholder} value={message} onChange={(e) => setMessage(e.target.value)} className="field resize-y" maxLength={1500} />
          </Field>
        </fieldset>

        <div>
          <button type="submit" className="btn-solid w-full sm:w-auto">
            <WhatsAppIcon className="h-4 w-4" />
            {b.submit}
          </button>
          <p className="mt-4 max-w-md text-[0.8125rem] leading-relaxed text-muted">{b.note}</p>
        </div>
      </form>
    </div>
  );
}

/** Bouton qui ouvre le formulaire sur le bon onglet puis y fait défiler la page. */
export function BookButton({ tab, dress, message, className, children }: { tab: Tab; dress?: DressType; message?: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#contact"
      className={className}
      onClick={(e) => {
        if (!document.getElementById("contact")) return;
        e.preventDefault();
        openBooking({ tab, dress, message });
      }}
    >
      {children}
    </a>
  );
}
