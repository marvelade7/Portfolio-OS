import { Plus, Save, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from '../data/projectCategories.js';

const initialForm = {
  title: '',
  description: '',
  category: 'Full Stack',
  status: 'In Progress',
  stack: [],
  repo: '',
  demo: '',
  thumbnail: '',
};

export default function AddProjectDialog({ initialCategory, onClose, onSave }) {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    category: initialCategory || initialForm.category,
  }));
  const [tagInput, setTagInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setForm((current) => ({ ...current, category: initialCategory }));
    }
  }, [initialCategory]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function addTag(value = tagInput) {
    const tag = value.trim();
    if (!tag) return;

    setForm((current) => {
      if (current.stack.some((item) => item.toLowerCase() === tag.toLowerCase())) {
        return current;
      }
      return { ...current, stack: [...current.stack, tag] };
    });
    setTagInput('');
  }

  function removeTag(tag) {
    setForm((current) => ({
      ...current,
      stack: current.stack.filter((item) => item !== tag),
    }));
  }

  function handleTagKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== ',') return;
    event.preventDefault();
    addTag();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const pendingTag = tagInput.trim();
    const stack = pendingTag && !form.stack.includes(pendingTag)
      ? [...form.stack, pendingTag]
      : form.stack;

    try {
      await onSave({
        ...form,
        title: form.title.trim(),
        description: form.description.trim(),
        repo: form.repo.trim(),
        demo: form.demo.trim(),
        thumbnail: form.thumbnail.trim(),
        stack,
      });
      setForm(initialForm);
      setTagInput('');
    } catch (saveError) {
      setError(saveError.message || 'Project could not be saved.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      data-no-desktop-menu="true"
      className="absolute inset-0 z-[90] grid place-items-center bg-black/45 px-5 backdrop-blur-sm"
      onClick={() => {
        if (!submitting) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-lg border border-black/60 bg-[#2C2C2C] text-white shadow-window"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-11 items-center justify-between border-b border-black/45 bg-[#242424] px-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Plus size={16} className="text-[#E95420]" />
            Add Project
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="grid h-6 w-6 place-items-center rounded-full bg-[#E95420] text-white transition hover:bg-[#ff6b34] disabled:opacity-60"
            aria-label="Close"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>

        <div className="max-h-[calc(88vh-44px)] space-y-4 overflow-auto p-5">
          <label className="block text-sm font-semibold">
            Title
            <input
              value={form.title}
              onChange={(event) => updateField('title', event.target.value)}
              required
              autoFocus
              className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
            />
          </label>

          <label className="block text-sm font-semibold">
            Description
            <textarea
              value={form.description}
              onChange={(event) => updateField('description', event.target.value)}
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Category
              <select
                value={form.category}
                onChange={(event) => updateField('category', event.target.value)}
                className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
              >
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Status
              <select
                value={form.status}
                onChange={(event) => updateField('status', event.target.value)}
                className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
              >
                {PROJECT_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm font-semibold">
            Tech Stack
            <div className="mt-2 rounded-md border border-[#4a4a4a] bg-[#1f1f1f] p-2 transition focus-within:border-[#E95420] focus-within:ring-2 focus-within:ring-[#E95420]/25">
              <div className="flex flex-wrap gap-2">
                {form.stack.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="rounded-full bg-[#E95420] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#ff6b34]"
                    title={`Remove ${tag}`}
                  >
                    {tag}
                  </button>
                ))}
                <input
                  value={tagInput}
                  onChange={(event) => setTagInput(event.target.value)}
                  onKeyDown={handleTagKeyDown}
                  onBlur={() => addTag()}
                  placeholder="Type a tag, press Enter"
                  className="h-7 min-w-44 flex-1 bg-transparent px-1 text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
            </div>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              GitHub URL
              <input
                value={form.repo}
                onChange={(event) => updateField('repo', event.target.value)}
                className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
              />
            </label>
            <label className="block text-sm font-semibold">
              Live Demo URL
              <input
                value={form.demo}
                onChange={(event) => updateField('demo', event.target.value)}
                className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold">
            Thumbnail URL
            <input
              value={form.thumbnail}
              onChange={(event) => updateField('thumbnail', event.target.value)}
              className="mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25"
            />
          </label>

          {error && (
            <div className="rounded-md border border-red-500/45 bg-red-500/10 px-3 py-2 text-sm text-red-100">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#9f4a2d]"
            >
              <Save size={16} />
              {submitting ? 'Saving' : 'Save'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
