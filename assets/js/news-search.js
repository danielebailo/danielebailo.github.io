(function () {
  const container = document.getElementById('news-search');
  if (!container) return;

  const input = document.getElementById('newsSearchInput');
  const results = document.getElementById('newsSearchResults');
  const count = document.getElementById('newsSearchCount');
  const posts = Array.from(document.querySelectorAll('article.post-entry, article.first-entry'));
  const params = new URLSearchParams(window.location.search);
  const isEnglish = document.documentElement.lang && document.documentElement.lang.startsWith('en');
  // Accept old month-based links and reduce them to their year.
  let currentYear = params.get('anno') || (params.get('mese') || '').slice(0, 4);
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

  function setDefaultState() {
    results.innerHTML = '';
    count.textContent = '';
    posts.forEach((post) => post.classList.remove('news-search-hidden'));
    document.querySelectorAll('[data-news-year].active').forEach((link) => link.classList.remove('active'));
  }

  function render(items, active) {
    if (!active) {
      setDefaultState();
      return;
    }

    posts.forEach((post) => post.classList.add('news-search-hidden'));

    if (!items.length) {
      count.textContent = isEnglish ? 'No articles found.' : 'Nessun articolo trovato.';
      results.innerHTML = '';
      return;
    }

    const archiveText = currentYear ? ` ${isEnglish ? 'in' : 'nel'} ${currentYear}` : '';
    const foundText = items.length === 1
      ? (isEnglish ? '1 article found' : '1 articolo trovato')
      : (isEnglish ? `${items.length} articles found` : `${items.length} articoli trovati`);
    const clearText = isEnglish ? 'show all' : 'mostra tutti';
    count.innerHTML = `${foundText}${archiveText}${currentYear ? ` · <a href="#news-search" data-news-clear>${clearText}</a>` : ''}`;

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
        <a class="entry-link" aria-label="${isEnglish ? 'Open' : 'Apri'} ${escapeHtml(item.title)}" href="${item.permalink}"></a>
      </article>
    `).join('');
  }

  function search() {
    const query = input.value.trim();
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    const active = Boolean(terms.length || currentYear);

    if (!active) {
      render([], false);
      return;
    }

    const matches = index
      .filter((item) => !currentYear || (item.date || '').slice(0, 4) === currentYear)
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

  function activateYear(year) {
    currentYear = year || '';
    document.querySelectorAll('[data-news-year].active').forEach((link) => link.classList.remove('active'));
    if (currentYear) {
      document.querySelectorAll(`[data-news-year="${currentYear}"]`).forEach((link) => link.classList.add('active'));
    }
    history.replaceState(null, '', currentYear ? `?anno=${encodeURIComponent(currentYear)}#news-search` : './#news-search');
    search();
    setTimeout(() => container.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }

  document.addEventListener('click', (event) => {
    const yearLink = event.target.closest('[data-news-year]');
    const clearLink = event.target.closest('[data-news-clear]');
    if (yearLink) {
      event.preventDefault();
      activateYear(yearLink.dataset.newsYear);
    } else if (clearLink) {
      event.preventDefault();
      input.value = '';
      activateYear('');
    }
  });

  fetch(container.dataset.indexUrl)
    .then((response) => response.json())
    .then((data) => {
      index = data || [];
      if (currentYear) {
        const link = document.querySelector(`[data-news-year="${currentYear}"]`);
        if (link) link.classList.add('active');
      }
      if (input.value.trim() || currentYear) search();
    })
    .catch(() => { count.textContent = isEnglish ? 'Search is not available right now.' : 'La ricerca non è disponibile in questo momento.'; });

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
