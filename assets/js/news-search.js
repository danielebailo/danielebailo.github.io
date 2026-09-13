(function () {
  const container = document.getElementById('news-search');
  if (!container) return;

  const input = document.getElementById('newsSearchInput');
  const results = document.getElementById('newsSearchResults');
  const count = document.getElementById('newsSearchCount');
  const posts = Array.from(document.querySelectorAll('article.post-entry, article.first-entry'));
  const params = new URLSearchParams(window.location.search);
  const archiveMonth = params.get('mese') || '';
  let index = [];

  const normalize = (value) => (value || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const escapeHtml = (value) => (value || '').toString().replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[char]);

  const formatMonth = (value) => {
    const [year, month] = (value || '').split('-');
    const names = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return year && month ? `${names[Number(month) - 1]} ${year}` : value;
  };

  function setDefaultState() {
    results.innerHTML = '';
    count.textContent = '';
    posts.forEach((post) => post.classList.remove('news-search-hidden'));
  }

  function render(items, active) {
    if (!active) {
      setDefaultState();
      return;
    }

    posts.forEach((post) => post.classList.add('news-search-hidden'));

    if (!items.length) {
      count.textContent = 'Nessuna news trovata.';
      results.innerHTML = '';
      return;
    }

    const archiveText = archiveMonth ? ` in ${formatMonth(archiveMonth)}` : '';
    count.innerHTML = `${items.length === 1 ? '1 news trovata' : `${items.length} news trovate`}${archiveText}${archiveMonth ? ' · <a href="./#news-search">mostra tutte</a>' : ''}`;
    results.innerHTML = items.map((item) => `
      <article class="post-entry news-search-result">
        ${item.image ? `<img class="news-search-thumb" src="${escapeHtml(item.image)}" alt="" loading="lazy" width="120">` : ''}
        <div class="news-search-result-body">
          <header class="entry-header">
            <h2>${escapeHtml(item.title)}</h2>
          </header>
          <div class="entry-content">
            <p>${escapeHtml(item.summary || '').slice(0, 240)}${item.summary && item.summary.length > 240 ? '…' : ''}</p>
          </div>
          <footer class="entry-footer">${escapeHtml(item.date || '')}</footer>
        </div>
        <a class="entry-link" aria-label="Apri ${escapeHtml(item.title)}" href="${item.permalink}"></a>
      </article>
    `).join('');
  }

  function search() {
    const query = input.value.trim();
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const active = Boolean(terms.length || archiveMonth);

    if (!active) {
      render([], false);
      return;
    }

    const matches = index
      .filter((item) => !archiveMonth || item.month === archiveMonth)
      .map((item) => {
        if (!terms.length) return { item, score: 0 };
        const haystack = normalize([
          item.title,
          item.summary,
          item.content,
          ...(item.tags || []),
          ...(item.categories || [])
        ].join(' '));
        const matched = terms.every((term) => haystack.includes(term));
        const titleMatch = normalize(item.title).includes(normalize(query));
        return matched ? { item, score: titleMatch ? 0 : haystack.indexOf(terms[0]) } : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .map((match) => match.item);

    render(matches, active);
  }

  fetch(container.dataset.indexUrl)
    .then((response) => response.json())
    .then((data) => {
      index = data || [];
      if (input.value.trim() || archiveMonth) search();
    })
    .catch(() => { count.textContent = 'La ricerca non è disponibile in questo momento.'; });

  input.addEventListener('input', search);
  input.addEventListener('search', search);

  function focusFromHash() {
    if (window.location.hash === '#news-search') {
      setTimeout(() => input.focus(), 150);
    }
  }

  window.addEventListener('hashchange', focusFromHash);
  focusFromHash();
})();
