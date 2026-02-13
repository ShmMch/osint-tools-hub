# OSINT Tools Hub

Simple static app for listing OSINT tools with:

- Search by name, tag, or description
- Tag filtering
- Clean card-based tools hub
- Short description + direct open link
- Add tool via modal form
- Export to `tools.json`

## Files

- `index.html` - page structure
- `styles.css` - clean hub UI styles
- `app.js` - tool data and app logic

## Update your tool list

You have 2 options:

1. In the app UI:
- Click `Add Tool`
- Fill the form and save
- Click `Export tools.json`

2. In code:
- Edit `baseTools` in `app.js`

JSON format:

```json
{
  "name": "Tool Name",
  "url": "https://tool-url.com",
  "tags": ["Tag1", "Tag2"],
  "description": "Short description"
}
```

## Save to GitHub JSON

GitHub Pages is static, so the app cannot directly write files to your repository at runtime.

Use this flow:
1. Add tools in UI.
2. Click `Export tools.json`.
3. Commit the exported `tools.json` file to your repo on GitHub.
4. The app will automatically load `tools.json` on next deploy.

## Keyboard shortcuts

- `/` focus search

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, go to `Settings -> Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch), folder `/ (root)`
4. Save and wait for the Pages URL.
