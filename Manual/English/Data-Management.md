# Data‑Management Manual

## Overview
`src/data/portfolio-data.ts` is the single source of truth for every piece of information that appears on the portfolio site.  It contains profile data, hero copy, skills, projects, research, experience, publications, education, journey, contact info, and a handful of helper methods.

### Where it lives
```
src/data/portfolio-data.ts
```

### Structure
The exported object `portfolioData` has the following top‑level keys.  Each key contains the objects or arrays you will see on the site.

- **profile** – personal details (display name, full name, tagline, focus areas, location, email, socials)
- **hero** – copy for the landing hero (title, subtitle, buttons)
- **skills** – array of skill groups; each group contains an array of `name`/`kind` objects
- **projects** – array of project objects (slug, name, tagline, description, role, tech, etc.)
- **research** – array of research entries (slug, title, area, problem, approach, methods, status, period, role, results, links)
- **experience** – array of teaching or experience entries (type, org, role, period, summary, highlights)
- **publications** – array of publication placeholders (title, venue, year, placeholder)
- **education** – array of academic entries (type, org, role, period, summary)
- **journey** – timeline events (year, title, venue/organization, placeholder)
- **contact** – email, location, phone, address
- **universityActivities** – list of activities (org, role, period, summary)
- **getFocusAreasDisplay()** – helper that concatenates the first three focus area tags.

The formatting is straightforward JSON‑like syntax, but you should keep it consistent:
- Object/array braces `{}`/`[]` must match.
- Strings are double‑quoted.
- Trailing commas are optional but allowed.
- Use `null` for missing links (e.g., `demo` or `github`).

### Editing tips
1. **Open it in a code editor** – the file is small enough to safely edit line‑by‑line.
2. **Keep the array structure** – do not remove the array brackets; just add/remove items inside.
3. **Validate strings** – each string should be wrapped in double quotes. For multiline strings you may use JavaScript template literals (`` `text` ``), but plain double quotes are easier.
4. **Test locally** – after each edit run `npm run dev` and verify the site updates.
5. **Back up** – if you are making many changes, save a copy before committing.

### Example modification
Suppose you want to change your email from `DukeMahdinal@gmail.com` to `mahdim@duke.edu`.
```ts
email: "mahdim@duke.edu",
```

Adding a new project:
You have two options:

1. **Manual edit** – add/remove project objects directly inside the `projects` array in `src/data/portfolio-data.ts`.
2. **Programmatic** – use standard JavaScript array methods (like `push()`, `splice()`, `filter()`) if you prefer to manipulate the list programmatically.

`push()` is just a normal JavaScript array method; it is optional and not required for manual editing.

```ts
projects.push({
  slug: "new-project",
  name: "My New Project",
  tagline: "Short project description",
  description: "Full description goes here. Include all fields that exist in the actual project structure.",
  role: "Lead Developer",
  tech: ["React", "Next.js"],
  year: 2026,
  status: "Active",
  links: {
    github: "https://github.com/your/repo",
    demo: "https://demo.example.com"
  },
  domain: "Web"
});
```

### Takeaways
- All the data for the site is in this single file.
- No API calls, no database; the app compiles the file at build time.
- Future UI for editing will be added, so once that exists you can swap this manual for a web form.
