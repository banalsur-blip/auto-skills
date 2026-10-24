# auto-skills

A Claude Code mod: Claude picks and runs the right skills, plugins and MCP connectors on its own, so you never have to type slash commands.

It adds one short section to the system prompt every turn (see `hooks/register.ts`, the `RULES` text). Edit that text to make Claude more or less eager.

## Install

At the prompt of a terminal session:

```
/plugin install auto-skills --marketplace banalsur-blip/auto-skills
```

Answer `y` to add the marketplace, then pick a scope (user scope = all your sessions).

From a shell:

```
claude plugin install auto-skills --marketplace banalsur-blip/auto-skills
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `banalsur-blip/auto-skills`, then Add plugin.
