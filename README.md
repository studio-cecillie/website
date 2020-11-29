# studio.cecillie.fr

Le site web du studio cecillie.

## Development

```bash
npx tailwindcss-cli build ./static/tailwind.css -o ./static/styles.css
curl -LO https://cecil.app/cecil.phar
php cecil.phar serve -v
```

## Production

```bash
NODE_ENV=production npx tailwindcss-cli build ./static/tailwind.css -o ./static/styles.css
curl -LO https://cecil.app/cecil.phar
php cecil.phar build
```
