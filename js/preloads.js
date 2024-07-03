
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.36d8fefbce642da6c324.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/764.latest.pt-BR.97e3208757653c64f963.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/320.latest.pt-BR.bf8cc47a59e3b79145a7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.latest.pt-BR.8ad3529580644646060f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.f1fdafe37b5a962454a4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.latest.pt-BR.6db36d65de55b15facf0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/569.latest.pt-BR.406f42dec60e3e93493f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.pt-BR.4a340ffb6a2e641e6beb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.latest.pt-BR.ca56b69083fc21d89c48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.12695561ea7815014f3e.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/764.latest.pt-BR.0fb6861019e1927de500.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.986e8f2dec326c2598cf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.pt-BR.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  