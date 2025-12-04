# danielebailo.github.io

Sito personale di Daniele Bailo realizzato con [Hugo](https://gohugo.io/) e tema PaperMod. Questa repo contiene i contenuti Markdown pubblicati su GitHub Pages.

## Struttura
- `content/`: pagine e articoli. La sezione `news/` ospita aggiornamenti brevi.
- `static/`: asset statici (immagini, PDF, ecc.).
- `themes/`: tema PaperMod.
- `hugo.toml`: configurazione del sito e del menu.

## Migrazione da WordPress
Per spostare i contenuti storici da WordPress a Hugo:
1. Installa il plugin [WordPress to Hugo Exporter](https://wordpress.org/plugins/jekyll-exporter/) (funziona anche per Hugo) oppure esporta XML con Strumenti → Esporta.
2. Esegui l'export e scarica l'archivio `.zip` generato dal plugin: contiene i Markdown e gli asset.
3. Copia i file Markdown nelle sezioni appropriate di `content/` (es. pagine in `content/`, articoli in `content/news/`) e gli asset in `static/`.
4. Controlla i metadati nel front matter (`title`, `date`, `tags`, `draft`) e uniformali alle sezioni del sito.
5. Avvia l'anteprima locale con `hugo server` e verifica i link prima di fare commit e push.

## Aggiungere un nuovo post News
1. Crea un nuovo file con l'archetipo dedicato:
   ```bash
   hugo new --kind news content/news/2024-12-31-titolo-del-post.md
   ```
2. Apri il file generato e aggiorna titolo, descrizione, tags e testo. Imposta `draft: false` quando è pronto alla pubblicazione.
3. Per aggiungere immagini o PDF, copiali in `static/` e referenziali con percorsi relativi (es. `/imgs/mia-foto.jpg`).
4. Verifica in locale con `hugo server` e poi effettua `git add`, `git commit` e `git push` per pubblicare su GitHub Pages.

Con questa struttura puoi mantenere il sito leggero, versionato e facilmente aggiornabile senza dipendenze da plugin.
