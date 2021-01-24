# Running development instance

1. Build the project once with "npm run build" to generate migrations using interpreted JS as typeorm needs JS context to run.
2. Change src to dist in ormconfig.json to generate migrations and run them.
3. change dist to src to runa development server instance.
