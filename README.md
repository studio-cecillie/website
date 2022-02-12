# studio.cecillie.fr

Le site web du studio cecillie.

## Development

```bash
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css --watch
curl -LO https://cecil.app/cecil.phar
php cecil.phar serve -v
```

## Production

```bash
NODE_ENV=production npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css
curl -LO https://cecil.app/cecil.phar
php cecil.phar build
```
