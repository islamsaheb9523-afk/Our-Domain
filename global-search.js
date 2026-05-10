// global-search.js (updated)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Fuse === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    script.onload = initSearch;
    document.head.appendChild(script);
  } else {
    initSearch();
  }

  function initSearch() {
    const container = document.querySelector('.search-global-container');
    const iconBtn = document.querySelector('.search-icon-btn');
    const closeBtn = document.querySelector('.search-close');
    const searchInput = document.getElementById('globalSearchInput');
    const resultsPanel = document.getElementById('searchResultsPanel');

    if (!container || !iconBtn || !closeBtn || !searchInput || !resultsPanel) return;

    const fuseOptions = {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'synopsis', weight: 1 },
        { name: 'genres', weight: 1.5 },
        { name: 'year', weight: 0.5 }
      ],
      threshold: 0.3,
      includeScore: true,
      ignoreLocation: true
    };
    const fuse = new Fuse(animeDatabase, fuseOptions);

    let currentResults = [];

    iconBtn.addEventListener('click', () => {
      container.classList.add('active');
      searchInput.focus();
    });

    closeBtn.addEventListener('click', () => {
      container.classList.remove('active');
      searchInput.value = '';
      resultsPanel.classList.remove('show');
      currentResults = [];
    });

    document.addEventListener('click', function(e) {
      if (!container.contains(e.target) && !resultsPanel.contains(e.target)) {
        resultsPanel.classList.remove('show');
      }
    });

    let debounceTimer;
    searchInput.addEventListener('input', function(e) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();
        if (query === '') {
          resultsPanel.classList.remove('show');
          currentResults = [];
          return;
        }
        const results = fuse.search(query);
        currentResults = results.slice(0, 8);
        renderResults(currentResults);
      }, 250);
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && currentResults.length > 0) {
        e.preventDefault();
        const firstResult = currentResults[0];
        goToAnime(firstResult.item);
      }
    });

    function renderResults(results) {
      if (!results.length) {
        resultsPanel.innerHTML = '<div class="no-results-panel">✨ No matches</div>';
        resultsPanel.classList.add('show');
        return;
      }
      resultsPanel.innerHTML = results.map(res => {
        const anime = res.item;
        const genresHtml = (anime.genres || []).map(g => `<span style="background:#2d3748; padding:2px 8px; border-radius:20px; font-size:0.7rem;">${escapeHtml(g)}</span>`).join(' ');
        return `
          <div class="result-item" data-page="${anime.page}" data-id="${anime.id}">
            <div class="result-title">${escapeHtml(anime.title)}</div>
            <div class="result-meta">📅 ${anime.year || '?'} • ${genresHtml}</div>
            <div class="result-synopsis">${escapeHtml(anime.synopsis.substring(0, 100))}...</div>
          </div>
        `;
      }).join('');
      resultsPanel.classList.add('show');

      document.querySelectorAll('.result-item').forEach(el => {
        el.addEventListener('click', () => {
          const page = el.dataset.page;
          const id = el.dataset.id;
          goToAnime({ page, id });
        });
      });
    }

    // CHANGED: use sessionStorage instead of URL hash
    function goToAnime(anime) {
      if (!anime || !anime.page) return;
      // Store the target anime ID in sessionStorage
      sessionStorage.setItem('scrollToAnimeId', anime.id);
      // Navigate to the page
      window.location.href = anime.page;
    }

    function escapeHtml(str) {
      if (!str) return '';
      return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
      });
    }
  }
});