class Pwa {

    constructor(self) {
        this.scope = self;
        const Version = new URL(location).searchParams.get("v");
        this.CACHE_VERSION = Version;
        //this.BASE_CACHE_FILES=['/js/theme.min.js','/js/theme_light.min.js','/abridge.css','/js/abridge.min.js','/','/404.html','/offline/','/manifest.json'];
        this.BASE_CACHE_FILES = ['/','/404.html','/_redirects','/about/','/abridge.css','/advancing-ai-emotional-intelligence/','/agentic-ai-autonomous-project-management/','/ai-anthropologist-understanding-workplace-dynamics/','/ai-artificial-but-not-so-intelligent/','/ai-enhanced-agile-dod/','/ai-serendipity/','/analyzing-media-with-custom-gpt/','/android-chrome-512x512.png','/android-icon-192x192.png','/android-icon-36x36.png','/apple-touch-icon-114x114.png','/apple-touch-icon-120x120.png','/apple-touch-icon-144x144.png','/apple-touch-icon-152x152.png','/apple-touch-icon-57x57.png','/apple-touch-icon-60x60.png','/apple-touch-icon-72x72.png','/apple-touch-icon-76x76.png','/apple-touch-icon.png','/archive/','/atom.xml','/banner.png','/banner.webp','/banner.xcf','/browserconfig.xml','/chatgpt-panel-of-experts/','/claude-ethical-ai-framework/','/code.txt','/cognitive-load-theory/','/contact/','/critically-evaluating-generated-content/','/custom.css','/disclaimer/','/elasticlunr.min.js','/emotional-intelligence-in-ai/','/enhancing-cybersecurity-with-ai/','/favicon-128.png','/favicon-16x16.png','/favicon-196x196.png','/favicon-32x32.png','/favicon-96x96.png','/favicon-dark.svg','/favicon.ico','/favicon.svg','/fonts/KaTeX_AMS-Regular.woff2','/fonts/KaTeX_Caligraphic-Bold.woff2','/fonts/KaTeX_Caligraphic-Regular.woff2','/fonts/KaTeX_Fraktur-Bold.woff2','/fonts/KaTeX_Fraktur-Regular.woff2','/fonts/KaTeX_Main-Bold.woff2','/fonts/KaTeX_Main-BoldItalic.woff2','/fonts/KaTeX_Main-Italic.woff2','/fonts/KaTeX_Main-Regular.woff2','/fonts/KaTeX_Math-BoldItalic.woff2','/fonts/KaTeX_Math-Italic.woff2','/fonts/KaTeX_SansSerif-Bold.woff2','/fonts/KaTeX_SansSerif-Italic.woff2','/fonts/KaTeX_SansSerif-Regular.woff2','/fonts/KaTeX_Script-Regular.woff2','/fonts/KaTeX_Size1-Regular.woff2','/fonts/KaTeX_Size2-Regular.woff2','/fonts/KaTeX_Size3-Regular.woff2','/fonts/KaTeX_Size4-Regular.woff2','/fonts/KaTeX_Typewriter-Regular.woff2','/fonts/Roboto-Bold.woff2','/fonts/Roboto-Italic.woff2','/fonts/Roboto-Mono-Italic.woff2','/fonts/Roboto-Mono.woff2','/fonts/Roboto.woff2','/gigo-in-project-management/','/harnessing-ai-tame-knowledge-chaos-agile-teams/','/images/ReqXformEngine.png','/images/Untitled.png','/images/adaptivelearning.png','/images/agentic_ai_project_management.webp','/images/ai-acceptance-criteria.webp','/images/ai-anthropologist-tech.webp','/images/ai_cybersecurity.png','/images/ai_definition_of_done.png','/images/ai_emotional_intelligence.webp','/images/aiagileretro.webp','/images/aianthro.png','/images/aianthrostepbystep.webp','/images/aiemotinalint.webp','/images/aikm.png','/images/aiserendipity.webp','/images/claude-ai-ethics.webp','/images/cognitiveload.webp','/images/confusedai.webp','/images/criticallyeval.png','/images/ferris-gesture.svg','/images/ferris.svg','/images/gigo.webp','/images/gigo2.webp','/images/humanintheloop.png','/images/logo.png','/images/mediaanalysis.png','/images/mermaidexample.png','/images/panelofexperts.png','/images/technovastats.png','/images/writewithai1.png','/images/writewithai2.png','/images/writingwithai3.png','/improving-acceptance-criteria-ai-agile/','/js/abridge.min.js','/js/abridge_nopwa.min.js','/js/abridge_nosearch.min.js','/js/abridge_nosearch_nopwa.min.js','/js/codecopy.js','/js/elasticlunr.min.js','/js/email.js','/js/katex-auto-render.min.js','/js/katex.min.js','/js/katexbundle.min.js','/js/katexoptions.js','/js/lunr.da.js','/js/lunr.da.min.js','/js/lunr.de.js','/js/lunr.de.min.js','/js/lunr.du.js','/js/lunr.du.min.js','/js/lunr.es.js','/js/lunr.es.min.js','/js/lunr.fi.js','/js/lunr.fi.min.js','/js/lunr.fr.js','/js/lunr.fr.min.js','/js/lunr.hu.js','/js/lunr.hu.min.js','/js/lunr.it.js','/js/lunr.it.min.js','/js/lunr.jp.js','/js/lunr.jp.min.js','/js/lunr.no.js','/js/lunr.no.min.js','/js/lunr.pt.js','/js/lunr.pt.min.js','/js/lunr.ro.js','/js/lunr.ro.min.js','/js/lunr.ru.js','/js/lunr.ru.min.js','/js/lunr.stemmer.support.js','/js/lunr.stemmer.support.min.js','/js/lunr.sv.js','/js/lunr.sv.min.js','/js/lunr.tr.js','/js/lunr.tr.min.js','/js/lunr.zh.js','/js/lunr.zh.min.js','/js/mathtex-script-type.min.js','/js/pagefind.search.js','/js/prestyle.js','/js/search.js','/js/search_elasticlunr.min.js','/js/search_tinysearch.min.js','/js/searchjava.js','/js/searchjavaugly.js','/js/sw_load.js','/js/sw_load.min.js','/js/theme.js','/js/theme.min.js','/js/theme_button.js','/js/theme_light.js','/js/theme_light.min.js','/js/tinysearch.js','/katex.min.css','/logo.png','/logo.svg','/logo.webp','/manifest.json','/manifest.min.json','/mstile-144x144.png','/mstile-150x150.png','/mstile-310x150.png','/mstile-310x310.png','/mstile-70x70.png','/navigating-ai-tools-daily-work/','/navigating-the-ethical-landscape-of-the-ai-anthropologist/','/nojs.css','/page/1/','/page/2/','/page/3/','/page/4/','/page/5/','/page/6/','/page/7/','/page/8/','/page/9/','/privacy/','/processed_images/ReqXformEngine.cad8a2f2c145dd78.png','/processed_images/ReqXformEngine.cbfaf29b77e7f9db.png','/processed_images/ReqXformEngine.f9e014252a5ea63e.png','/processed_images/adaptivelearning.31a0fd7c553d0e2d.png','/processed_images/adaptivelearning.8ecda3c639af36f1.png','/processed_images/adaptivelearning.93f95770de85f3dc.png','/processed_images/agentic_ai_project_management.6fe240a4227aa608.webp','/processed_images/agentic_ai_project_management.8aa34b4896455058.webp','/processed_images/agentic_ai_project_management.9bb8a343b4c4b7eb.webp','/processed_images/ai-acceptance-criteria.a689fd4927eedd58.webp','/processed_images/ai-acceptance-criteria.b26248ed7593643b.webp','/processed_images/ai-acceptance-criteria.ea4adc6b08d547a4.webp','/processed_images/ai-anthropologist-tech.62a03157b2f788f3.webp','/processed_images/ai-anthropologist-tech.a58f46e74bb5dd58.webp','/processed_images/ai-anthropologist-tech.d59fca7f6f80c9f5.webp','/processed_images/ai_cybersecurity.53b816f94c12796c.png','/processed_images/ai_cybersecurity.6925b9f909b3f7dc.png','/processed_images/ai_cybersecurity.fcd28ba59d7330c9.png','/processed_images/ai_definition_of_done.1275fd7f83b5e031.png','/processed_images/ai_definition_of_done.87608cc3346c6d78.png','/processed_images/ai_definition_of_done.f52f1d86b41e91e4.png','/processed_images/ai_emotional_intelligence.7f99e6a604c0b5a1.webp','/processed_images/ai_emotional_intelligence.960de78af602e98f.webp','/processed_images/ai_emotional_intelligence.f78411be7b9efb19.webp','/processed_images/aiagileretro.403d4a05130858ca.webp','/processed_images/aiagileretro.9fd05ad71b5167ac.webp','/processed_images/aiagileretro.c9c6f8da1bb409b5.webp','/processed_images/aianthro.3f73463363cb2d46.png','/processed_images/aianthro.97a791e778691844.png','/processed_images/aianthro.e708c34238aca956.png','/processed_images/aianthrostepbystep.5ef99a9dc9607039.webp','/processed_images/aianthrostepbystep.92f59b1a8d475bfc.webp','/processed_images/aianthrostepbystep.ee4b6b39189f4cdc.webp','/processed_images/aiemotinalint.7bb8297dc1caf7ad.webp','/processed_images/aiemotinalint.c00e25f6c5d8dacf.webp','/processed_images/aiemotinalint.d92687938f465745.webp','/processed_images/aikm.0858c4d74a48a07a.png','/processed_images/aikm.1da601c3016d91e1.png','/processed_images/aikm.d47396ddeae46fe4.png','/processed_images/aiserendipity.5bb68f746001bbbb.webp','/processed_images/aiserendipity.9e72533e6777f452.webp','/processed_images/aiserendipity.c651b85a53204628.webp','/processed_images/claude-ai-ethics.1f9acfe527b113ab.webp','/processed_images/claude-ai-ethics.307e3791ddd817f3.webp','/processed_images/claude-ai-ethics.6cc457102da39254.webp','/processed_images/cognitiveload.5fd9380af743313c.webp','/processed_images/cognitiveload.a99c47e1c2ae6a18.webp','/processed_images/cognitiveload.bc5c5c95260c5899.webp','/processed_images/confusedai.9838bbab6f981202.webp','/processed_images/confusedai.98fb0581ed06ffa2.webp','/processed_images/confusedai.f43c1f367e5a510c.webp','/processed_images/criticallyeval.077661907ae68688.png','/processed_images/criticallyeval.2375671c56028c13.png','/processed_images/criticallyeval.f458edbef9507c3f.png','/processed_images/gigo.1cfd656c2b6e6e41.webp','/processed_images/gigo.535e1939ce93da5c.webp','/processed_images/gigo.df3c69dfdb01b793.webp','/processed_images/gigo2.23ca78f91f254de4.webp','/processed_images/gigo2.8b5a1d6bb059b3c4.webp','/processed_images/gigo2.a955a29055672c1b.webp','/processed_images/humanintheloop.6d321e3d530451f2.png','/processed_images/humanintheloop.6ea235ffdf005833.png','/processed_images/humanintheloop.b58778d6234e87a0.png','/processed_images/mediaanalysis.361911228799632c.png','/processed_images/mediaanalysis.421252182ef34c27.png','/processed_images/mediaanalysis.e542e2162898606c.png','/processed_images/mermaidexample.16636e33cf831ce1.png','/processed_images/mermaidexample.770cb0506b627f81.png','/processed_images/mermaidexample.9d07321f31025029.png','/processed_images/panelofexperts.2d124e55bfdd178a.png','/processed_images/panelofexperts.e688a853d746e180.png','/processed_images/panelofexperts.ea04625dc07994de.png','/processed_images/technovastats.42307707da2f738d.png','/processed_images/technovastats.a0296e7b40e9dfb4.png','/processed_images/technovastats.dc4ad68fb932e179.png','/processed_images/writewithai1.76f70e46800e8b7a.png','/processed_images/writewithai1.77d999f477108dff.png','/processed_images/writewithai1.d36a4330f22656aa.png','/processed_images/writewithai2.af2763bbd1d39612.png','/processed_images/writewithai2.cdffb4a657d2e6ea.png','/processed_images/writewithai2.e90e73f3d3eee654.png','/processed_images/writingwithai3.0298128618fd98da.png','/processed_images/writingwithai3.a63825a1d3fec6ec.png','/processed_images/writingwithai3.b0cc9074684c716e.png','/profileicon.xcf','/robots.txt','/rolling-out-the-ai-anthropologist/','/safari-pinned-tab.svg','/search_index.en.json','/site.webmanifest','/sitemap.xml','/smbanner.png','/tags/','/tags/acceptance-criteria/','/tags/acceptance-criteria/atom.xml','/tags/agentic/','/tags/agentic/atom.xml','/tags/agi/','/tags/agi/atom.xml','/tags/agile-development/','/tags/agile-development/atom.xml','/tags/agile-frameworks/','/tags/agile-frameworks/atom.xml','/tags/agile/','/tags/agile/atom.xml','/tags/ai-alignment-strategies/','/tags/ai-alignment-strategies/atom.xml','/tags/ai-anthropologist/','/tags/ai-anthropologist/atom.xml','/tags/ai-assisted-analysis/','/tags/ai-assisted-analysis/atom.xml','/tags/ai-bias-reduction-techniques/','/tags/ai-bias-reduction-techniques/atom.xml','/tags/ai-enhanced-projects-from-gigo-to-go-live/','/tags/ai-enhanced-projects-from-gigo-to-go-live/atom.xml','/tags/ai-ethical-impact-assessment/','/tags/ai-ethical-impact-assessment/atom.xml','/tags/ai-ethical-principles/','/tags/ai-ethical-principles/atom.xml','/tags/ai-ethics/','/tags/ai-ethics/atom.xml','/tags/ai-fairness-in-decision-making/','/tags/ai-fairness-in-decision-making/atom.xml','/tags/ai-feedback/','/tags/ai-feedback/atom.xml','/tags/ai-generated-content/','/tags/ai-generated-content/atom.xml','/tags/ai-governance/','/tags/ai-governance/atom.xml','/tags/ai-human-rights-compliance/','/tags/ai-human-rights-compliance/atom.xml','/tags/ai-in-project-management/','/tags/ai-in-project-management/atom.xml','/tags/ai-limitations/','/tags/ai-limitations/atom.xml','/tags/ai-project-management/','/tags/ai-project-management/atom.xml','/tags/ai-research/','/tags/ai-research/atom.xml','/tags/ai-risk-mitigation-strategies/','/tags/ai-risk-mitigation-strategies/atom.xml','/tags/ai/','/tags/ai/atom.xml','/tags/analytical-thinking/','/tags/analytical-thinking/atom.xml','/tags/anomaly-detection/','/tags/anomaly-detection/atom.xml','/tags/anthropic-ai-ethics/','/tags/anthropic-ai-ethics/atom.xml','/tags/artificial-intelligence/','/tags/artificial-intelligence/atom.xml','/tags/ast/','/tags/ast/atom.xml','/tags/automation/','/tags/automation/atom.xml','/tags/autonomous-systems/','/tags/autonomous-systems/atom.xml','/tags/best-practices/','/tags/best-practices/atom.xml','/tags/bias-detection/','/tags/bias-detection/atom.xml','/tags/business-requirements/','/tags/business-requirements/atom.xml','/tags/case-studies/','/tags/case-studies/atom.xml','/tags/chatgpt/','/tags/chatgpt/atom.xml','/tags/chinese-room-argument/','/tags/chinese-room-argument/atom.xml','/tags/claude-ai-guidelines/','/tags/claude-ai-guidelines/atom.xml','/tags/claude-ai/','/tags/claude-ai/atom.xml','/tags/cognitive-load-theory/','/tags/cognitive-load-theory/atom.xml','/tags/collaboration/','/tags/collaboration/atom.xml','/tags/completeness-checks/','/tags/completeness-checks/atom.xml','/tags/compliance/','/tags/compliance/atom.xml','/tags/consent/','/tags/consent/atom.xml','/tags/constitutional-ai/','/tags/constitutional-ai/atom.xml','/tags/continuous-improvement/','/tags/continuous-improvement/atom.xml','/tags/covid-19/','/tags/covid-19/atom.xml','/tags/creativity/','/tags/creativity/atom.xml','/tags/critical-evaluation/','/tags/critical-evaluation/atom.xml','/tags/cybersecurity/','/tags/cybersecurity/atom.xml','/tags/data-analysis/','/tags/data-analysis/atom.xml','/tags/decision-making/','/tags/decision-making/atom.xml','/tags/deep-learning/','/tags/deep-learning/atom.xml','/tags/definition-of-done/','/tags/definition-of-done/atom.xml','/tags/digital-transformation/','/tags/digital-transformation/atom.xml','/tags/emotion-detection/','/tags/emotion-detection/atom.xml','/tags/emotion-recognition/','/tags/emotion-recognition/atom.xml','/tags/emotional-intelligence/','/tags/emotional-intelligence/atom.xml','/tags/ethical-ai-development/','/tags/ethical-ai-development/atom.xml','/tags/ethical-ai/','/tags/ethical-ai/atom.xml','/tags/ethical-hacking/','/tags/ethical-hacking/atom.xml','/tags/ethics/','/tags/ethics/atom.xml','/tags/expert-panels/','/tags/expert-panels/atom.xml','/tags/fact-checking/','/tags/fact-checking/atom.xml','/tags/first-time-quality/','/tags/first-time-quality/atom.xml','/tags/future-of-ai/','/tags/future-of-ai/atom.xml','/tags/future-of-work/','/tags/future-of-work/atom.xml','/tags/future-trends/','/tags/future-trends/atom.xml','/tags/gherkin/','/tags/gherkin/atom.xml','/tags/gigo/','/tags/gigo/atom.xml','/tags/goodput/','/tags/goodput/atom.xml','/tags/gpt/','/tags/gpt/atom.xml','/tags/hiring/','/tags/hiring/atom.xml','/tags/hr/','/tags/hr/atom.xml','/tags/human-ai-collaboration/','/tags/human-ai-collaboration/atom.xml','/tags/human-computer-interaction/','/tags/human-computer-interaction/atom.xml','/tags/implementation-guide/','/tags/implementation-guide/atom.xml','/tags/innovation/','/tags/innovation/atom.xml','/tags/knowledge-management/','/tags/knowledge-management/atom.xml','/tags/llms/','/tags/llms/atom.xml','/tags/machine-learning/','/tags/machine-learning/atom.xml','/tags/media-literacy/','/tags/media-literacy/atom.xml','/tags/mermaid/','/tags/mermaid/atom.xml','/tags/multi-round-discussions/','/tags/multi-round-discussions/atom.xml','/tags/narrow-ai/','/tags/narrow-ai/atom.xml','/tags/nlp/','/tags/nlp/atom.xml','/tags/organizational-culture/','/tags/organizational-culture/atom.xml','/tags/organizational-network-analysis/','/tags/organizational-network-analysis/atom.xml','/tags/panel-of-experts/','/tags/panel-of-experts/atom.xml','/tags/philosophy-of-mind/','/tags/philosophy-of-mind/atom.xml','/tags/predictive-analysis/','/tags/predictive-analysis/atom.xml','/tags/privacy/','/tags/privacy/atom.xml','/tags/productivity/','/tags/productivity/atom.xml','/tags/project-governance/','/tags/project-governance/atom.xml','/tags/project-management/','/tags/project-management/atom.xml','/tags/prompt-engineering/','/tags/prompt-engineering/atom.xml','/tags/quality-assurance/','/tags/quality-assurance/atom.xml','/tags/quality/','/tags/quality/atom.xml','/tags/remote-collaboration/','/tags/remote-collaboration/atom.xml','/tags/remote-work/','/tags/remote-work/atom.xml','/tags/requirements-documents/','/tags/requirements-documents/atom.xml','/tags/requirements-management/','/tags/requirements-management/atom.xml','/tags/requirements/','/tags/requirements/atom.xml','/tags/responsible-ai/','/tags/responsible-ai/atom.xml','/tags/retrospectives/','/tags/retrospectives/atom.xml','/tags/security-strategies/','/tags/security-strategies/atom.xml','/tags/sentiment-analysis/','/tags/sentiment-analysis/atom.xml','/tags/sequence-diagrams/','/tags/sequence-diagrams/atom.xml','/tags/serendipity/','/tags/serendipity/atom.xml','/tags/software-development/','/tags/software-development/atom.xml','/tags/software-testing/','/tags/software-testing/atom.xml','/tags/status-reporting/','/tags/status-reporting/atom.xml','/tags/strategic-decision-making/','/tags/strategic-decision-making/atom.xml','/tags/systems-thinking/','/tags/systems-thinking/atom.xml','/tags/team-collaboration/','/tags/team-collaboration/atom.xml','/tags/tech-trends/','/tags/tech-trends/atom.xml','/tags/technology/','/tags/technology/atom.xml','/tags/text-analysis/','/tags/text-analysis/atom.xml','/tags/threat-detection/','/tags/threat-detection/atom.xml','/tags/throughput/','/tags/throughput/atom.xml','/tags/transparency/','/tags/transparency/atom.xml','/tags/turing-test/','/tags/turing-test/atom.xml','/tags/user-stories/','/tags/user-stories/atom.xml','/tags/velocity/','/tags/velocity/atom.xml','/tags/work-ethics/','/tags/work-ethics/atom.xml','/tags/workplace-ai/','/tags/workplace-ai/atom.xml','/tags/workplace-culture/','/tags/workplace-culture/atom.xml','/tags/workplace-dynamics/','/tags/workplace-dynamics/atom.xml','/tags/writing-user-stories-with-ai/','/tags/writing-user-stories-with-ai/atom.xml','/technologies-behind-ai-anthropologist/','/throughput-and-goodput/','/tinysearch_engine_bg.wasm','/using-ai-for-retrospective-analysis-in-agile/','/using-ai-improving-requirements/','/web-app-manifest-192x192.png','/web-app-manifest-512x512.png','/writing-user-stories-with-ai-1/','/writing-user-stories-with-ai-2/','/writing-user-stories-with-ai-3/','/yandex_eebd6fb85d89d0b9.html'];
        this.host = `${self.location.protocol}//${self.location.host}`;
        console.info(`Host: ${this.host}`);
        this.OFFLINE_PAGE = '/offline/';
        this.NOT_FOUND_PAGE = '/404.html';
        this.CACHE_NAME = `content-v${this.CACHE_VERSION}`;
        // 3600=1hour, 28800=8hours, 86400=1day, 604800=1week, 1209600=2weeks
        this.NORM_TTL = 86400;
        this.LONG_TTL = 604800;
        // keep the ttl on these lower:
        this.TTL_NORM = ["sw.min.js", "sw_load.min.js"];
        // rarely change, may be a good idea to periodically refresh, incase I change these and forget to increment service worker version:
        this.TTL_LONG = ["jpg", "jpeg", "png", "gif", "webp", "avif", "ico", "svg", "xsl", "txt"];
        // never change, cache forever unless service worker version is incremented:
        this.TTL_EXEMPT = ["js", "css", "otf", "eot", "ttf", "woff", "woff2", "mp4", "webm", "mp3", "ogg"];
        // skip these extensions so they expire same time as html: st,wasm,json(search), xml(sitemap,atom,rss)
    }

    canCache(url) {
        if (url.startsWith("http://localhost")) {
            return false;
        }
        const result = url.toString().startsWith(this.host);
        return result;
    }

    getFileExtension(url) {
        const extension = url.split('.').reverse()[0].split('?')[0];
        return (extension.endsWith('/')) ? '/' : extension;
    }
    getFileName(url) {
        const filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0];
        return (filename.endsWith('/')) ? '/' : filename;
    }

    getTTL(url) {
        if (typeof url === 'string') {
            const extension = this.getFileExtension(url);
            const filename = this.getFileName(url);

            if (this.TTL_NORM.indexOf(filename) > -1) {
                console.info(url + ' contains a TTL_NORM filename');
                return this.NORM_TTL;
            }
            if (this.TTL_LONG.indexOf(extension) > -1) {
                console.info(url + ' contains a TTL_LONG extension');
                return this.LONG_TTL;
            }
            if (this.TTL_EXEMPT.indexOf(extension) > -1) {
                console.info(url + ' contains a TTL_EXEMPT extension');
                return null;
            }
            console.info(url + ' TTL_NORM');
            return this.NORM_TTL;
        }
        return null;
    }

    async installServiceWorker() {
        try {
            await caches.open(this.CACHE_NAME).then((cache) => {
                return cache.addAll(this.BASE_CACHE_FILES);
            }, err => console.error(`Error with ${this.CACHE_NAME}`, err));
            return this.scope.skipWaiting();
        }
        catch (err) {
            return console.error("Error with installation: ", err);
        }
    }

    cleanupLegacyCache() {

        const currentCaches = [this.CACHE_NAME];

        return new Promise(
            (resolve, reject) => {
                caches.keys()
                    .then((keys) => keys.filter((key) => !~currentCaches.indexOf(key)))
                    .then((legacy) => {
                        if (legacy.length) {
                            Promise.all(legacy.map((legacyKey) => caches.delete(legacyKey))
                            ).then(() => resolve()).catch((err) => {
                                console.error("Error in legacy cleanup: ", err);
                                reject(err);
                            });
                        } else {
                            resolve();
                        }
                    }).catch((err) => {
                        console.error("Error in legacy cleanup: ", err);
                        reject(err);
                    });
            });
    }

    async preCacheUrl(url) {
        const cache = await caches.open(this.CACHE_NAME);
        const response = await cache.match(url);
        if (!response) {
            return fetch(url).then(resp => cache.put(url, resp.clone()));
        }
        return null;
    }

    register() {
        this.scope.addEventListener('install', event => {
            event.waitUntil(
                Promise.all([
                    this.installServiceWorker(),
                    this.scope.skipWaiting(),
                ]));
                console.info('SW Installed');
        });

        this.scope.addEventListener('activate', event => {
            event.waitUntil(Promise.all(
                [this.cleanupLegacyCache(),
                this.scope.clients.claim(),
                this.scope.skipWaiting()]).catch((err) => {
                    console.error("Activation error: ", err);
                    event.skipWaiting();
                }));
        });

        this.scope.addEventListener('fetch', event => {
            event.respondWith(
                caches.open(this.CACHE_NAME).then(async cache => {
                    // check if this is NOT a resource we allow cacheing (some other domain), if so fetch it instead of cache.
                    if (!this.canCache(event.request.url)) {
                        return fetch(event.request);
                    }
                    // check the cache for the requested resource
                    const response = await cache.match(event.request);
                    if (response) {
                        const headers = response.headers.entries();
                        let date = null;
                        for (let pair of headers) {
                            if (pair[0] === 'date') {
                                date = new Date(pair[1]);
                                break;
                            }
                        }
                        // date is not working, so ignore TTL and just serve the cached resource.
                        if (!date) {
                            return response;
                        }
                        const age = parseInt(((new Date().getTime() - date.getTime()) / 1000).toString());
                        const ttl = this.getTTL(event.request.url);
                        if (ttl === null || (ttl && age < ttl)) {
                            // return the resource if it is not beyond the TTL
                            return response;
                        }
                    }
                    // if we made it here then we either did not have the cache, or the TTL was expired.
                    return fetch(event.request.clone()).then(resp => {
                        if (resp.status < 400) {
                            if (this.canCache(event.request.url)) {
                                cache.put(event.request, resp.clone());
                            }
                            return resp;
                        }
                        else {
                            return cache.match(this.NOT_FOUND_PAGE);
                        }
                    }).catch(err => {
                        // if we made it here then we were unable to fetch the resource.
                        // maybe we were only fetching because of expired TTL, so use the cache regardless of TTL:
                        if (typeof event.request.url === 'string') {
                            console.info("url: "+event.request.url)
                        }
                        if (response) {
                            return response;
                        }
                        // if we made it here then we were unable to fetch the resource and do not have it cached.
                        console.error(`Error fetching ${event.request.url} resulted in offline`, err);
                        return cache.match(this.OFFLINE_PAGE);
                    })
                }));
        });
    }
}

const pwa = new Pwa(self);
pwa.register();
