document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  const progressText = document.getElementById('progress-text');

  // Section order for progress tracking
  const sectionOrder = ['overview', 'what-is', 'mindset', 'tools', 'hands-on', 'summary'];
  const totalSections = sectionOrder.length;

  function updateProgress(targetId) {
    if (progressText) {
      const idx = sectionOrder.indexOf(targetId);
      if (idx !== -1) {
        progressText.textContent = (idx + 1) + ' / ' + totalSections + ' 섹션';
      }
    }
  }

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Show target content section
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
        }
      });

      // Update progress
      updateProgress(targetId);

      // Update URL hash
      window.location.hash = targetId;

      // Scroll to top of content
      if (window.innerWidth <= 768) {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.querySelector('.main-content').scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Handle initial hash
  function handleHash() {
    const hash = window.location.hash.slice(1) || 'overview';
    const targetLink = document.querySelector('[data-target="' + hash + '"]');
    if (targetLink) {
      targetLink.click();
    }
  }

  handleHash();
  window.addEventListener('hashchange', handleHash);

  // ===== Modal Interaction =====
  const caseData = [
    {
      id: 'case-1',
      emoji: '🔗',
      title: 'LinkStash',
      creator: '디자이너 (코딩 무경험)',
      desc: '디자이너가 Cursor로 3일 만에 만든 스마트 북마크 서비스예요. 링크를 저장하면 AI가 자동으로 분류하고 태그를 달아줘요. 필터링, 캘린더 추적, 일일 읽기 요약 기능까지 갖춘 생산성 SaaS예요.',
      tool: '🔧 Cursor',
      result: '🚀 3일 만에 출시',
      url: 'https://linkstash.vercel.app'
    },
    {
      id: 'case-2',
      emoji: '📂',
      title: 'Social Archiver',
      creator: '비개발자 (임형균)',
      desc: 'SNS 게시물을 옵시디언 마크다운으로 아카이빙하는 플러그인이에요. 페이스북, 인스타, 트위터 등 21개 플랫폼을 지원하고, 48개국 270명 이상이 사용 중이에요. iOS 앱도 있어요.',
      tool: '🔧 바이브코딩',
      result: '🌍 48개국 270명+ 사용',
      url: 'https://github.com/hyungyunlim/obsidian-social-archiver-releases'
    },
    {
      id: 'case-3',
      emoji: '🥗',
      title: 'BLight',
      creator: 'PM/디자이너 (비개발자)',
      desc: '28일 Switch-On 다이어트 프로그램 관리 앱이에요. 매일 식단 체크리스트, 단식 타이머, 체중 시각화, 캘린더 추적 기능이 있어요. Lovable로 단 2일(약 10시간) 만에 완성해서 앱스토어에 출시했어요.',
      tool: '🔧 Lovable',
      result: '📱 2일 만에 앱스토어 출시',
      url: 'https://apps.apple.com/kr/app/blight/id6753778081'
    },
    {
      id: 'case-4',
      emoji: '🎲',
      title: 'Skull King 점수 계산기',
      creator: 'sewookori studio',
      desc: '보드게임 Skull King의 점수를 자동으로 계산해주는 앱이에요. 최대 8명까지 지원하고, 한국어 포함 다국어를 지원해요. 2일 만에 웹 + iOS 버전을 동시에 완성했어요.',
      tool: '🔧 Antigravity IDE',
      result: '🎮 2일 만에 웹+iOS 출시',
      url: 'https://play.google.com/store/apps/details?id=com.sewookori.skullking_scoresheet'
    },
    {
      id: 'case-5',
      emoji: '📸',
      title: 'Photo AI',
      creator: 'Pieter Levels (디지털 노마드/기업가)',
      desc: '코딩 경험 없이 Cursor만으로 만든 AI 포토 스튜디오예요. 사용자가 자기 사진을 업로드하면 AI가 다양한 스타일의 프로필 사진을 만들어줘요. 월 $132K(약 1.7억원) 수익을 달성한 1인 SaaS 프로젝트예요.',
      tool: '🔧 Cursor',
      result: '💰 월 $132K 수익',
      url: 'https://photoai.com'
    },
    {
      id: 'case-6',
      emoji: '🎠',
      title: 'aiCarousels',
      creator: 'Fernando Pessagno (제품 디자이너, 비개발자)',
      desc: 'AI로 LinkedIn, Instagram, TikTok용 캐러셀(슬라이드)을 자동 생성하는 도구예요. 제품 디자이너인 Fernando가 ChatGPT로 10일 만에 만들었고, 6개월 만에 월 $5K 수익을 달성했어요.',
      tool: '🔧 ChatGPT',
      result: '💰 6개월 만에 월 $5K',
      url: 'https://aicarousels.com'
    },
    {
      id: 'case-7',
      emoji: '💪',
      title: 'Hypertropher',
      creator: '비개발자 (프로그래밍 무경험)',
      desc: '고단백 식단을 쉽게 검색할 수 있는 앱이에요. 프로그래밍 경험이 전혀 없는 사람이 Cursor만으로 만들었어요. 주변 식당에서 단백질이 풍부한 메뉴를 찾아주는 실용적인 도구예요.',
      tool: '🔧 Cursor',
      result: '🥩 실사용 서비스',
      url: 'https://hypertropher.com'
    }
  ];

  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  function openModal(caseId) {
    const data = caseData.find(d => d.id === caseId);
    if (!data) return;

    document.getElementById('modal-emoji').textContent = data.emoji;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-creator').textContent = '만든 사람: ' + data.creator;
    document.getElementById('modal-desc').textContent = data.desc;
    document.getElementById('modal-tool').textContent = data.tool;
    document.getElementById('modal-result').textContent = data.result;

    const linkEl = document.getElementById('modal-link');
    if (data.url) {
      linkEl.href = data.url;
      linkEl.style.display = 'inline-block';
    } else {
      linkEl.style.display = 'none';
    }

    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  // Card click handlers
  document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('click', function() {
      openModal(this.getAttribute('data-modal'));
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // ===== Mobile Tab Bar =====
  const mobileQuery = window.matchMedia('(max-width: 768px)');
  const tabBar = document.querySelector('.mobile-tab-bar');
  const tabItems = document.querySelectorAll('.tab-item');

  // Tab click → scroll to section
  tabItems.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      if (!mobileQuery.matches) return;

      var targetId = this.getAttribute('data-target');
      var section = document.getElementById(targetId);
      if (!section) return;

      // Update active tab
      tabItems.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');

      // Scroll section into view (offset for sticky tab bar)
      var tabBarHeight = tabBar ? tabBar.offsetHeight : 0;
      var top = section.getBoundingClientRect().top + window.pageYOffset - tabBarHeight - 8;
      window.scrollTo({ top: top, behavior: 'smooth' });

      // Center active tab in tab bar
      this.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    });
  });

  // Scroll → sync active tab (IntersectionObserver)
  function setupScrollSync() {
    if (!mobileQuery.matches) return;

    var observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          tabItems.forEach(function(t) { t.classList.remove('active'); });
          var activeTab = document.querySelector('.tab-item[data-target="' + id + '"]');
          if (activeTab) {
            activeTab.classList.add('active');
            activeTab.scrollIntoView({ inline: 'center', behavior: 'smooth' });
          }
        }
      });
    }, observerOptions);

    contentSections.forEach(function(section) {
      observer.observe(section);
    });

    return observer;
  }

  var scrollObserver = null;

  function handleMobileChange(e) {
    if (e.matches) {
      // Entering mobile: show all sections, setup observer
      scrollObserver = setupScrollSync();
    } else {
      // Leaving mobile: disconnect observer, restore single-section view
      if (scrollObserver) {
        scrollObserver.disconnect();
        scrollObserver = null;
      }
      // Restore desktop: hide non-active sections
      var activeNav = document.querySelector('.nav-link.active');
      var activeId = activeNav ? activeNav.getAttribute('data-target') : 'overview';
      contentSections.forEach(function(section) {
        section.classList.remove('active');
        if (section.id === activeId) section.classList.add('active');
      });
    }
  }

  // Initialize
  mobileQuery.addEventListener('change', handleMobileChange);
  if (mobileQuery.matches) {
    scrollObserver = setupScrollSync();
  }

});
