import { useEffect, useMemo, useRef, useState } from 'react';
import { fetchProjects } from '../lib/api.js';

const bootText = 'Welcome to Ubuntu 22.04 LTS...';
const promptLabel = 'devuser@ubuntu-portfolio:~$';

function getSocialValue(profile, label, fallback) {
  return profile.socials.find((social) => social.label === label)?.value || fallback;
}

export default function TerminalApp({ portfolio }) {
  const [entries, setEntries] = useState([]);
  const [command, setCommand] = useState('');
  const [bootProgress, setBootProgress] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const inputRef = useRef(null);
  const bootReadyRef = useRef(false);

  const commandMap = useMemo(
    () => ({
      whoami: [
        `${portfolio.profile.name} - ${portfolio.profile.title}`,
        portfolio.profile.bio,
      ],
      skills: portfolio.skills.map((group) => `${group.group}: ${group.items.join(', ')}`),
      contact: [
        `Email: ${portfolio.profile.email}`,
        `GitHub: ${getSocialValue(portfolio.profile, 'GitHub', 'github.com/marvelade')}`,
        `LinkedIn: ${getSocialValue(portfolio.profile, 'LinkedIn', 'linkedin.com/in/devuser')}`,
      ],
      ls: ['about/', 'projects/', 'skills/', 'contact/'],
      help: [
        'whoami      show name and one-line bio',
        'skills      list tech stack',
        'projects    fetch projects from /api/projects',
        'contact     show email, GitHub, and LinkedIn',
        'ls          list terminal directories',
        'clear       clear terminal',
        'help        show available commands',
      ],
    }),
    [portfolio],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBootProgress((current) => {
        if (current >= bootText.length) {
          window.clearInterval(timer);
          setBootComplete(true);
          return current;
        }

        return current + 1;
      });
    }, 35);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (bootComplete && !bootReadyRef.current) {
      bootReadyRef.current = true;
      setEntries([
        { type: 'boot', text: bootText },
        { type: 'boot', text: 'Type "help" to list available commands.' },
      ]);
    }
  }, [bootComplete]);

  function appendEntries(lines, type = 'output') {
    setEntries((current) => [...current, ...lines.map((text) => ({ type, text }))]);
  }

  async function runCommand(rawCommand) {
    const trimmed = rawCommand.trim();
    const normalized = trimmed.toLowerCase();

    if (!normalized) {
      return;
    }

    setCommandHistory((current) => [...current, trimmed]);
    setHistoryIndex(null);

    if (normalized === 'clear') {
      setEntries([]);
      return;
    }

    appendEntries([`${promptLabel} ${trimmed}`], 'command');

    if (normalized === 'projects') {
      setIsLoadingProjects(true);
      appendEntries(['Fetching projects from /api/projects...']);

      try {
        const response = await fetchProjects();
        const projects = Array.isArray(response.projects) ? response.projects : [];
        const projectLines = projects.length
          ? projects.map((project) => {
              const category = project.category || project.type || 'Project';
              const status = project.status || 'Unknown';
              const stack = Array.isArray(project.stack) && project.stack.length
                ? project.stack.join(', ')
                : 'No stack listed';

              return `${project.title} — ${category} • ${status} • ${stack}`;
            })
          : ['No projects found.'];

        appendEntries(projectLines);
      } catch (error) {
        appendEntries(['Unable to load projects right now.']);
      } finally {
        setIsLoadingProjects(false);
      }

      return;
    }

    const output = commandMap[normalized];
    if (output) {
      appendEntries(output);
      return;
    }

    appendEntries([`${trimmed}: command not found`]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCommand(command);
    setCommand('');
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();

      setHistoryIndex((current) => {
        if (!commandHistory.length) {
          return null;
        }

        const nextIndex = current === null ? commandHistory.length - 1 : Math.max(0, current - 1);
        setCommand(commandHistory[nextIndex] || '');
        return nextIndex;
      });
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();

      setHistoryIndex((current) => {
        if (!commandHistory.length) {
          setCommand('');
          return null;
        }

        if (current === null) {
          setCommand('');
          return null;
        }

        const nextIndex = current + 1;
        if (nextIndex >= commandHistory.length) {
          setCommand('');
          return null;
        }

        setCommand(commandHistory[nextIndex]);
        return nextIndex;
      });
    }
  }

  return (
    <div
      className="h-full bg-[#330d26] p-4 font-mono text-[13px] leading-6 text-[#d5f6d4] transition-all duration-200"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="min-h-full rounded-md border border-white/10 bg-[#330d26] p-4 shadow-inner transition-all duration-200">
        {!bootComplete ? (
          <div className="whitespace-pre-wrap text-white/85">
            {bootText.slice(0, bootProgress)}
            <span className="ml-1 inline-block w-[0.65ch] translate-y-[-1px] border-b-2 border-[#8ff0a4] align-middle motion-safe:animate-pulse" aria-hidden="true" />
          </div>
        ) : (
          <>
            {entries.map((entry, index) => (
              <div
                key={`${entry.type}-${entry.text}-${index}`}
                className={
                  entry.type === 'command'
                    ? 'whitespace-pre-wrap text-[#8ff0a4]'
                    : 'whitespace-pre-wrap text-white/85'
                }
              >
                {entry.text}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="mt-2 flex items-start gap-2">
              <span className="whitespace-nowrap text-[#8ff0a4]">{promptLabel}</span>
              <input
                ref={inputRef}
                value={command}
                onChange={(event) => {
                  setCommand(event.target.value);
                  setHistoryIndex(null);
                }}
                onKeyDown={handleKeyDown}
                className="h-6 min-w-0 flex-1 bg-transparent text-white outline-none caret-[#8ff0a4] transition-all duration-200"
                aria-label="Terminal command"
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                disabled={isLoadingProjects}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
