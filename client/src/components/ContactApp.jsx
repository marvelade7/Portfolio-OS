import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { sendContactMessage } from '../lib/api.js';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactApp({ portfolio }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    const result = await sendContactMessage({
      ...form,
      subject: 'Ubuntu portfolio inquiry',
      source: 'ubuntu-desktop',
    });

    if (result.ok) {
      setStatus('sent');
      setFeedback(result.message || 'Message sent.');
      setForm(initialForm);
      return;
    }

    setStatus('error');
    setFeedback(result.message || 'Message could not be sent.');
  }

  return (
    <div className="grid h-full bg-[#f6f2ef] text-[#211821] md:grid-cols-[0.85fr_1.15fr]">
      <aside className="border-b border-[#d8ccc4] bg-[#300A24] p-6 text-white md:border-b-0 md:border-r">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#E95420]">
          <Mail size={25} />
        </div>
        <h1 className="mt-5 text-2xl font-semibold">Contact</h1>
        <p className="mt-3 text-sm leading-6 text-white/78">
          Reach {portfolio.profile.name} for product builds, portfolio work, and full-stack web projects.
        </p>
        <a
          href={`mailto:${portfolio.profile.email}`}
          className="mt-6 inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#300A24] transition hover:bg-[#f0e8e2]"
        >
          {portfolio.profile.email}
        </a>
      </aside>

      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <label className="block text-sm font-semibold">
          Name
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
            className="mt-2 h-11 w-full rounded-md border border-[#cfc2bb] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
          />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
            className="mt-2 h-11 w-full rounded-md border border-[#cfc2bb] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
          />
        </label>
        <label className="block text-sm font-semibold">
          Message
          <textarea
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            required
            rows={6}
            className="mt-2 w-full resize-none rounded-md border border-[#cfc2bb] bg-white px-3 py-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#b96a4f]"
        >
          <Send size={16} />
          {status === 'sending' ? 'Sending' : 'Send'}
        </button>

        {feedback && (
          <p className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-[#0b7551]'}`}>
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
}
