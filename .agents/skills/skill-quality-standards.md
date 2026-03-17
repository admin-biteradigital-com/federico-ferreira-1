## Skill Quality Standards

As the ecosystem grows, consistent quality helps agents discover and use skills reliably. The following references and criteria keep the bar high.



### Quality Criteria

| Area | Guideline |
|------|-----------|
| **Description** | Write in third person. State *what* the skill does and *when* to use it. Use specific keywords agents can match on (e.g., "PostgreSQL migration" not "database stuff"). |
| **Progressive disclosure** | Keep top-level metadata under ~100 tokens. Skill body should stay below 500 lines. Load resources (large docs, schemas) on demand, not inline. |
| **No absolute paths** | Never hard-code machine-specific paths like `/Users/alice/`. Use relative paths or well-known variables (`$HOME`, `$PROJECT_ROOT`). |
| **Scoped tools** | Request only the tools the skill actually needs. Avoid blanket `"tools": ["*"]`. Declare tool dependencies explicitly. |

## 🤝 Contributing
