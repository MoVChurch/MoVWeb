if(!self.define){let s,e={};const a=(a,o)=>(a=new URL(a+".js",o).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(o,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let t={};const c=s=>a(s,i),b={module:{uri:i},exports:t,require:c};e[i]=Promise.all(o.map((s=>b[s]||c(s)))).then((s=>(r(...s),t)))}}define(["./workbox"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"prayers.html",revision:"985dd510f2900a0b82bfe627c58ca5e9"},{url:"about.html",revision:"00b657e961196b4b181d627c77d18d46"},{url:"assets/js/404.js",revision:"d1f6d50f11b5b09fae7fc2eb58a30037"},{url:"assets/js/formSubmit.min.js",revision:"90d64e07398d39953eaeb109c94fedc1"},{url:"assets/js/main.js",revision:"d51fb7c10d193d23164964cd76efefba"},{url:"assets/vendor/aos/aos.js",revision:"d3718e34eeb0355be8e3179a2e2bccb7"},{url:"assets/vendor/bootstrap/js/bootstrap.bundle.js",revision:"01a034c34cb9c1d2f062af8def13ecb7"},{url:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js",revision:"b75ae000439862b6a97d2129c85680e8"},{url:"assets/vendor/bootstrap/js/bootstrap.esm.js",revision:"f86c449a0babc30b33ff71a6fd064833"},{url:"assets/vendor/bootstrap/js/bootstrap.esm.min.js",revision:"da74cf4659eb6c671e549aaed3d7ca1d"},{url:"assets/vendor/bootstrap/js/bootstrap.js",revision:"1376378024397729b1febb40f5a0e16f"},{url:"assets/vendor/bootstrap/js/bootstrap.min.js",revision:"b0794583ec020a7852f0fc04d5cefc52"},{url:"assets/vendor/glightbox/js/glightbox.js",revision:"7bafdeb041b5a6eac144d1cfefe01b07"},{url:"assets/vendor/glightbox/js/glightbox.min.js",revision:"2b4c8cbaade24ecb58bcb0d89694ccee"},{url:"assets/vendor/isotope-layout/isotope.pkgd.js",revision:"8896e082b3fa1738e2e2f558a7fc1fa4"},{url:"assets/vendor/isotope-layout/isotope.pkgd.min.js",revision:"2afcff647ed260006faa71c8e779e8d4"},{url:"assets/vendor/php-email-form/validate.js",revision:"942e0d365d33a0f2d2b6ebfbe9321ba1"},{url:"assets/vendor/swiper/swiper-bundle.min.js",revision:"24fd8f796609d79fcb7b6e5ae754433b"},{url:"assets/css/404.css",revision:"086f5073565a01b01c9ea3995bb1d23b"},{url:"assets/css/style.css",revision:"d035b018829c420b3dd8cc7f093b2350"},{url:"assets/vendor/animate.css/animate.compat.css",revision:"9bb18ac93ea35cc03e71691c4af09568"},{url:"assets/vendor/animate.css/animate.css",revision:"cf2741a3a7ea8427ade651533a54ef1b"},{url:"assets/vendor/animate.css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"assets/vendor/aos/aos.css",revision:"847da8fca8060ca1a70f976aab1210b9"},{url:"assets/vendor/bootstrap-icons/bootstrap-icons.css",revision:"06cb502613f99040e534fec65fa725c7"},{url:"assets/vendor/bootstrap/css/bootstrap-grid.css",revision:"02c04dfa80af659dc6f4c517b677435d"},{url:"assets/vendor/bootstrap/css/bootstrap-grid.min.css",revision:"dbd47382523d754013115de4be202a74"},{url:"assets/vendor/bootstrap/css/bootstrap-grid.rtl.css",revision:"63d1e5a2903e394f52b1fccaf84159a0"},{url:"assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css",revision:"92871a500cb2d82f99258a6a17e46ef6"},{url:"assets/vendor/bootstrap/css/bootstrap-reboot.css",revision:"28372dcca49ddee994668db39a49f7f0"},{url:"assets/vendor/bootstrap/css/bootstrap-reboot.min.css",revision:"7b3e39ea9e950f59c494f3e0ae5971db"},{url:"assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css",revision:"d7cfce563ed23132808a3647f675a1ae"},{url:"assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css",revision:"1a3cae87f043a9031675fab697888c7c"},{url:"assets/vendor/bootstrap/css/bootstrap-utilities.css",revision:"a5f78ee119a023227eceb749f83f6b12"},{url:"assets/vendor/bootstrap/css/bootstrap-utilities.min.css",revision:"5e47a49091ab986da0c9a5122a5dfe6c"},{url:"assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css",revision:"a3ff7a01905bed4e279995549711d424"},{url:"assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css",revision:"1200ba112673d97391e77f097d1eb26f"},{url:"assets/vendor/bootstrap/css/bootstrap.css",revision:"41ba0ff5eed842d853aede220a3ccfee"},{url:"assets/vendor/bootstrap/css/bootstrap.min.css",revision:"3f30c2c47d7d23c7a994db0c862d45a5"},{url:"assets/vendor/bootstrap/css/bootstrap.rtl.css",revision:"1457707e717950e48e9af2ef614b68e8"},{url:"assets/vendor/bootstrap/css/bootstrap.rtl.min.css",revision:"dfa5ca983e2834131c9d9d51ae3b1eb2"},{url:"assets/vendor/boxicons/css/animations.css",revision:"2c0319e25c5cb233f4c6cf5e69d83fa3"},{url:"assets/vendor/boxicons/css/boxicons.css",revision:"6beebb34ea7a1e8d446d98a9b2c0bf8d"},{url:"assets/vendor/boxicons/css/boxicons.min.css",revision:"886ed8dd06c506c77cf226f4506b3c00"},{url:"assets/vendor/boxicons/css/transformations.css",revision:"d5afab8d6fa009e5bf06744ef93003f1"},{url:"assets/vendor/glightbox/css/glightbox.css",revision:"76e8ba51c713846b57e22b321dfd7a63"},{url:"assets/vendor/glightbox/css/glightbox.min.css",revision:"9b438b29cef1c212d1c65a877ffc7232"},{url:"assets/vendor/glightbox/css/plyr.css",revision:"a39f7b91915f8ed00dd4e3e11a3c93eb"},{url:"assets/vendor/glightbox/css/plyr.min.css",revision:"72c244ef068825d17123de804e1880b0"},{url:"assets/vendor/swiper/swiper-bundle.min.css",revision:"04720c60bc020cbba92785dd4029f7d2"},{url:"assets/img/aboutMary-bg.webp",revision:"c2ca67204bbc77fec94af2eb76aebbcb"},{url:"assets/img/astronaut.svg",revision:"267f689d5a94afdac93e4774bdd8c846"},{url:"assets/img/ChurchSideFront.webp",revision:"90873c48b893e4b2cc75e78551df1faf"},{url:"assets/img/jubileelogo.png",revision:"2ec5f3e4e47808b6bfc095f66795b167"},{url:"assets/img/motherFocus.webp",revision:"c696c5633cf5eaf9b221062bc6166cc9"},{url:"assets/img/planet.svg",revision:"d8efb3a5660e52540af829759f5ca757"},{url:"assets/img/priests/Fr.Biju-Mann.webp",revision:"72860a026f16177fdafe32da42d66abe"},{url:"assets/img/priests/Fr.BijuKollam.webp",revision:"ca730f0a3d6660f74d9536f293b1c1bd"},{url:"assets/img/priests/Fr.Bipin.webp",revision:"782766a90fa81b96e59a4cb9e0ad8357"},{url:"assets/img/priests/Fr.EmmanuelK.webp",revision:"6e2ab248da103a5965b7a48a0a98f34e"},{url:"assets/img/priests/Fr.Fibin.webp",revision:"cfc171487de21cdc926e2c0c1701ed4f"},{url:"assets/img/priests/Fr.GeorgeP.webp",revision:"bf89819b4b516c2f71405b55d94e032a"},{url:"assets/img/priests/Fr.Jitin.webp",revision:"74a5e42b9a09b5167892941af5bd734c"},{url:"assets/img/priests/Fr.JohnK.webp",revision:"258e0740a728bc7780dba76a86b04dd1"},{url:"assets/img/priests/Fr.Jojo-Thaik.webp",revision:"7a48147f620a3985faa595ca278045a2"},{url:"assets/img/priests/Fr.JustinK.webp",revision:"a1adc349fc85d77c3a1dc39631748895"},{url:"assets/img/priests/Fr.Kuriakose.webp",revision:"1b83f694844b4fc5e6e4b9e201cd2d29"},{url:"assets/img/priests/Fr.Maxin.webp",revision:"5da344dac77168fa346d937860517b40"},{url:"assets/img/priests/Fr.PaulOlickal.webp",revision:"e8b0ebbf9dcd9054d91efb2a871e3582"},{url:"assets/img/priests/Fr.RajeshMathew.webp",revision:"97af7886e21a900a9f27ce7c59b1cece"},{url:"assets/img/priests/Fr.StebinChir.webp",revision:"b353955ffc31ad72f9fbaf3fd3841a84"},{url:"assets/img/priests/Fr.SunnyP.webp",revision:"6d727304ddc0a8bf30a9d36ba17190a9"},{url:"assets/img/priests/Mother-of-Victory-Logo-Big.png",revision:"9b1ad98974146068d02343777e9064e2"},{url:"assets/img/priests/Mother-of-Victory-Logo-Small.png",revision:"defeec9925d0b19f6556b02a6cdd848f"},{url:"assets/img/testimonials/girl.png",revision:"e727a47ebcdbcfa7966499f0fa57d2d1"},{url:"assets/img/testimonials/man.png",revision:"fcee650c2ada1eb9ad61327a49ad5339"},{url:"assets/favicon_io/favicon.ico",revision:"c80b49b7d7d7ae1e06bee2eae0c7caea"},{url:"assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff",revision:"52196284de1fcb5b044f001a75482dba"},{url:"assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2",revision:"7f477633ddd12f84284654f2a2e89b8a"},{url:"assets/vendor/boxicons/fonts/boxicons.eot",revision:"4002d1c83d8dd40df85708c5601993e4"},{url:"assets/vendor/boxicons/fonts/boxicons.ttf",revision:"878061312a371566f591f1f1a9f76a87"},{url:"assets/vendor/boxicons/fonts/boxicons.woff",revision:"3a0cb82447f8e9ce865a709a92f0c752"},{url:"assets/vendor/boxicons/fonts/boxicons.woff2",revision:"aab73283f839e775f9ac86d642983653"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),s.registerRoute((({request:s})=>"document"===s.destination),new s.NetworkFirst({cacheName:"html-cache-v3",plugins:[new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute((({request:s})=>"script"===s.destination||"style"===s.destination||"image"===s.destination||"font"===s.destination),new s.CacheFirst({cacheName:"global-cache-v3",plugins:[new s.ExpirationPlugin({maxAgeSeconds:2592e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/script.google.com/,new s.NetworkFirst({cacheName:"google-scripts-cache-v3",networkTimeoutSeconds:15,plugins:[new s.ExpirationPlugin({maxAgeSeconds:43200}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
