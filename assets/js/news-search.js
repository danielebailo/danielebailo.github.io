(function () {
  const container = document.getElementById('news-search');
  if (!container) return;

  const input = document.getElementById('newsSearchInput');
  const results = document.getElementById('newsSearchResults');
  const count = document.getElementById('newsSearchCount');
  const posts = Array.from(document.querySelectorAll('article.post-entry, article.first-entry'));
  const params = new URLSearchParams(window.location.search);
  const isEnglish = document.documentElement.lang && document.documentElement.lang.startsWith('en');
  let currentMonth = params.get('mese') || '';
  let currentMonthLabel = '';
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
    const namesIt = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    const namesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const names = isEnglish ? namesEn : namesIt;
    return year && month ? `${names[Number(month) - 1]} ${year}` : value;
  };

  function setDefaultState() {
    results.innerHTML = '';
    count.textContent = '';
    posts.forEach((post) => post.classList.remove('news-search-hidden'));
    document.querySelectorAll('[data-news-month].active').forEach((link) => link.classList.remove('active'));
  }

  function render(items, active) {
    if (!active) {
      setDefaultState();
      return;
    }

    posts.forEach((post) => post.classList.add('news-search-hidden'));

    if (!items.length) {
      count.textContent = isEnglish ? 'No news found.' : 'Nessuna news trovata.';
      results.innerHTML = '';
      return;
    }

    const archiveText = currentMonth ? ` ${isEnglish ? 'in' : 'in'} ${currentMonthLabel || formatMonth(currentMonth)}` : '';
    const foundText = items.length === 1
      ? (isEnglish ? '1 news item found' : '1 news trovata')
      : (isEnglish ? `${items.length} news items found` : `${items.length} news trovate`);
    const clearText = isEnglish ? 'show all' : 'mostra tutte';
    count.innerHTML = `${foundText}${archiveText}${currentMonth ? ` · <a href="#news-search" data-news-clear>${clearText}</a>` : ''}`;

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
    const active = Boolean(terms.length || currentMonth);

    if (!active) {
      render([], false);
      return;
    }

    const matches = index
      .filter((item) => !currentMonth || item.month === currentMonth)
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

  function activateMonth(month, label) {
    currentMonth = month || '';
    currentMonthLabel = label || '';
    document.querySelectorAll('[data-news-month].active').forEach((link) => link.classList.remove('active'));
    if (currentMonth) {
      document.querySelectorAll(`[data-news-month="${currentMonth}"]`).forEach((link) => link.classList.add('active'));
    }
    history.replaceState(null, '', currentMonth ? `?mese=${encodeURIComponent(currentMonth)}#news-search` : './#news-search');
    search();
    setTimeout(() => container.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }

  document.addEventListener('click', (event) => {
    const monthLink = event.target.closest('[data-news-month]');
    const clearLink = event.target.closest('[data-news-clear]');
    if (monthLink) {
      event.preventDefault();
      activateMonth(monthLink.dataset.newsMonth, monthLink.dataset.newsMonthLabel);
    } else if (clearLink) {
      event.preventDefault();
      input.value = '';
      activateMonth('', '');
    }
  });

  fetch(container.dataset.indexUrl)
    .then((response) => response.json())
    .then((data) => {
      index = data || [];
      if (currentMonth) {
        const link = document.querySelector(`[data-news-month="${currentMonth}"]`);
        currentMonthLabel = link ? link.dataset.newsMonthLabel : '';
      }
      if (input.value.trim() || currentMonth) search();
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
