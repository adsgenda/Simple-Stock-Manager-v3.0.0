<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="manifest" href="{{ asset('/build/manifest.webmanifest') }}">
  <title inertia>{{ config('app.name', 'SSM') }}</title>

  @if (demo())
    <meta name="description" content="SSM (Simple Stock Manager) to manage your stock from anywhere, anytime." />
    <meta name="keywords" content="Tecdiary, Stock Manager, Inventory, Stock, Warehouse" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ssm.tecdiary.net/login" />
    <meta property="og:title" content="Simple Stock Manager (SSM)" />
    <meta property="og:image:height" content="995" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image" content="https://ssm.tecdiary.net/img/dashboard.png" />
    <meta property="og:description" content="SSM (Simple Stock Manager) to manage your stock from anywhere, anytime." />
  @endif

  <script>
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function updateTheme(savedTheme) {
      let theme = 'system';
      try {
        if (!savedTheme) {
          savedTheme = window.localStorage.theme;
        }
        if (savedTheme === 'dark') {
          theme = 'dark';
          document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
          theme = 'light';
          document.documentElement.classList.remove('dark');
        } else if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      } catch {
        theme = 'light';
        document.documentElement.classList.remove('dark');
      }
      return theme;
    }

    document.documentElement.setAttribute('data-theme', updateTheme());

    new MutationObserver(([{
      oldValue
    }]) => {
      let newValue = document.documentElement.getAttribute('data-theme');
      if (newValue !== oldValue) {
        try {
          window.localStorage.setItem('theme', newValue);
        } catch {}
        updateTheme(newValue);
      }
    }).observe(document.documentElement, {
      attributeFilter: ['data-theme'],
      attributeOldValue: true
    });

    window.addEventListener('storage', updateTheme);
    mediaQuery.addEventListener('change', updateTheme);
    window.Locale = '{{ app()->getLocale() }}';
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.getElementById('app-loading').style.display = 'none';
      }, 250);
    });
  </script>

  <script src="{{ asset('/build/registerSW.js') }}"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
  <style>
    .app-loading {
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      z-index: 40;
      display: flex;
      position: fixed;
      min-height: 100vh;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .app-loading.bg-gray-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }

    .dark .app-loading.dark\:bg-gray-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39 / var(--tw-bg-opacity));
    }

    .app-loading svg {
      --tw-text-opacity: 1;

      width: 3rem;
      height: 3rem;
      animation: spin 1s linear infinite;
      color: rgb(31 41 55 / var(--tw-text-opacity));
    }

    .dark .app-loading svg {
      color: rgb(229 231 235 / var(--tw-text-opacity));
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  </style>

  @routes
  @vite('resources/js/app.js', '')
  @inertiaHead
</head>

<body class="font-sans antialiased bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
  <div id="app-loading" class="app-loading bg-gray-50 dark:bg-gray-900">
    <svg width="64" height="64" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke-width="2" stroke="currentColor" stroke-opacity="0.25"
        vector-effect="non-scaling-stroke"></circle>
      <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke">
      </path>
    </svg>
  </div>
  @inertia
</body>

</html>
