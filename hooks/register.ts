import type { Register } from 'claude-code'

// What the model reads every turn; edit this text to change how eager it is.
const RULES = `# Auto skills, plugins and connectors
The user never types slash commands. Before acting on a request, decide yourself which tools fit and use them without asking:
- Skills: if any listed skill plausibly matches the task, invoke it with the Skill tool first, then follow it.
- Connectors (MCP): if the task touches an outside service (docs, mail, calendar, design, browser, GitHub, data), load the matching deferred tools with ToolSearch and use them. If a server needs auth, tell the user to authorize it via /mcp.
- Plugins: if nothing installed covers the task, search with SearchPlugins and offer the best match with SuggestPluginInstall.
Say in one short line which skill, plugin or connector you picked and why. Skip all of this for trivial questions.`

export const register: Register = on => {
  on('prompt.compose', async ($, e, next) => {
    const { sections } = await next(e)
    return { sections: [...sections, { id: `${$.plugin.name}:rules`, text: RULES, scope: 'session' }] }
  })
}
