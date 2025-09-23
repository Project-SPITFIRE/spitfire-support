# Rota Management System Documentation

A comprehensive internal documentation site built with Astro Starlight for the Rota Management System. This documentation provides role-based guides, workflows, and best practices for all system users.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **pnpm** (pnpm recommended for faster installs)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rota-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev

   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the documentation site.

## 📁 Project Structure

```
rota-docs/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── content/
│   │   └── docs/          # All documentation content
│   │       ├── index.mdx  # Homepage content
│   │       ├── roles/     # Role-specific guides
│   │       ├── features/  # Feature documentation
│   │       ├── workflows/ # Process workflows
│   │       ├── guides/    # User guides and tutorials
│   │       └── policies/  # Internal policies
│   └── assets/            # Images and other assets
├── astro.config.mjs       # Astro configuration
├── package.json
└── README.md
```

### Content Organization

- **`/roles/`** - Individual guides for each user role (Admin, COO, Operations Support, etc.)
- **`/features/`** - Detailed feature documentation (Requests, EOS Tasks, Schedules, etc.)
- **`/workflows/`** - Step-by-step process workflows
- **`/guides/`** - User guides, onboarding, and tutorials
- **`/policies/`** - Internal policies and guidelines

## ✍️ Writing Guidelines

We follow the **Microsoft Writing Style Guide** for all documentation. Key principles:

### Content Style
- **Use conversational tone** - Write as "you" to address the reader directly
- **Active voice** - "You can create requests" instead of "Requests can be created"
- **Sentence case** - For headings, buttons, and UI elements
- **Scannable content** - Use headings, bullet points, and short paragraphs
- **Simple language** - Avoid jargon and complex terminology

### Example:
```markdown
## Your responsibilities

**Create tasks**: Define new operational tasks with clear objectives.
**Update tasks**: Maintain current status information as requirements change.
```

### Markdown Best Practices

#### Headings
```markdown
# Page Title (H1 - only one per page)
## Section Heading (H2)
### Subsection Heading (H3)
#### Detail Heading (H4)
```

#### Links
```markdown
[Link text](./relative-path.md)
[External link](https://example.com)
```

#### Code Blocks
```markdown
```bash
npm run build
```

#### Tables

| Feature | Admin | COO | Deputies | HOO | Logistics | Ops Manager | Ops Support | Resourcing | Static Manager |
|---------|-------|-----|----------|-----|-----------|-------------|-------------|------------|----------------|
| Create Users | ✓ | | | | | | | | |
| Create/Delete Teams | ✓ | | | | | | | | |
| Submit Requests | | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ | ✓ |
| Update Requests | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create EOS Tasks | | | | | | | ✓ | | |
| View EOS Tasks | | | | | | ✓ | ✓ | | |
| Create Schedules | | | | | | | | | ✓ |
| Update Schedules | | | | | | | ✓ | | |
| Search Users | ✓ | | | | | | | | |
| Search Requests | | | | | | | ✓ | | |
| Search EOS Tasks | | | | | | | ✓ | | |
| Search Schedules | | | | | | | ✓ | | |
```

#### Callouts
```markdown
:::tip
This is helpful information for users.
:::

:::warning
Important information users should be aware of.
:::

:::danger
Critical information that could cause issues.
:::
```

## 🎯 Role-Based Content Strategy

### Content Structure per Role

Each role should have:
1. **Overview** - Role purpose and key responsibilities
2. **Daily workflow** - Typical day-to-day tasks
3. **Feature access** - What they can do in the system
4. **Best practices** - Tips for effective work
5. **Common scenarios** - Real-world examples

### Cross-References
- Link related content between roles
- Reference shared workflows
- Connect features to role capabilities

## 📝 Contributing Content

### Adding New Content

1. **Create a new Markdown file**
   ```bash
   touch src/content/docs/section/new-page.md
   ```

2. **Add frontmatter**
   ```markdown
   ---
   title: Page Title
   description: Brief description for SEO and navigation
   ---
   ```

3. **Write content following Microsoft Style Guide**

4. **Update navigation** (if needed in `astro.config.mjs`)

### Content Review Process

1. **Draft** - Create content in feature branch
2. **Review** - Team review for accuracy and style
3. **Test** - Preview in development environment
4. **Publish** - Merge to main branch

### Content Checklist

- [ ] Follows Microsoft Writing Style Guide
- [ ] Uses conversational tone and "you" addressing
- [ ] Includes practical examples and step-by-step instructions
- [ ] Has clear headings and scannable structure
- [ ] Links to related content appropriately
- [ ] Tested in local development environment

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

### Build and Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Starlight Configuration

Edit `astro.config.mjs` to customize:

```javascript
export default defineConfig({
  integrations: [
    starlight({
      title: 'Rota Management System',
      description: 'Internal documentation for the Rota Management System',
      social: {
        // Add social links if needed
      },
      sidebar: [
        // Customize navigation structure
      ],
      customCss: [
        // Add custom styles if needed
        './src/assets/custom.css'
      ]
    })
  ]
})
```

### Styling

- Starlight uses a clean, professional theme by default
- Custom CSS can be added in `src/assets/global.css`
- Focus on content over complex styling

## 🔍 Search Functionality

Starlight includes built-in search powered by Pagefind:
- Automatically indexes all content
- Supports search by role, feature, or keyword
- No additional configuration required

## 📱 Responsive Design

The documentation is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🚧 Future Considerations

### Phase 2: RBAC Implementation

When role-based access control is needed:
- Consider migration to Docusaurus
- Implement Better-Auth for authentication
- Add role-based content visibility
- Maintain current content structure

### Content Expansion

Planned additions:
- Video tutorials
- Interactive guides
- More detailed workflows
- Advanced search filters

## 🤝 Team Collaboration

### Roles and Responsibilities

**Content Creators**
- Write and maintain role-specific documentation
- Follow Microsoft Writing Style Guide
- Ensure accuracy of procedures and workflows

**Reviewers**
- Review content for clarity and accuracy
- Verify alignment with actual system behavior
- Check for consistency across documentation

**Maintainers**
- Manage site configuration and deployment
- Ensure technical functionality
- Handle updates and dependencies

### Communication

- Use clear commit messages
- Reference issues or tickets when applicable
- Tag relevant team members for review

## 📞 Support and Questions

For questions about:
- **Content accuracy** - Contact role subject matter experts
- **Writing style** - Reference Microsoft Writing Style Guide
- **Technical issues** - Contact development team
- **Site functionality** - Check Astro Starlight documentation

## 📚 Resources

- [Astro Starlight Documentation](https://starlight.astro.build/)
- [Microsoft Writing Style Guide](https://docs.microsoft.com/en-us/style-guide/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Astro Documentation](https://docs.astro.build/)

---

## License

Internal documentation for [Company Name]. All rights reserved.

## Version

Current version: 1.0.0
Last updated: 09 - 23 - 2023
