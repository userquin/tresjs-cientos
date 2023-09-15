import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/cientos/environment.png";
const _imports_1 = "/cientos/envmaps.png";
const __pageData = JSON.parse('{"title":"Environment","description":"","frontmatter":{},"headers":[],"relativePath":"guide/staging/environment.md","filePath":"guide/staging/environment.md"}');
const _sfc_main = { name: "guide/staging/environment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="environment" tabindex="-1">Environment <a class="header-anchor" href="#environment" aria-label="Permalink to &quot;Environment&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="Environment"></p><p>Is a component abstraction that automatically sets up a global cubemap, which affects the default <code>scene.environment</code>, and optionally <code>scene.background</code>,</p><p>It uses the composable <a href="/guide/staging/use-environment.html">useEnvironment</a> under the hood to load the cubemap.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">Environment</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">:files</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;[</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/px.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/nx.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/py.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/ny.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/pz.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">    &#39;/nz.jpg&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">Environment</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">:files</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;[</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/px.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/nx.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/py.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/ny.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/pz.jpg&#39;,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">    &#39;/nz.jpg&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#032F62" })}">]&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">/&gt;</span></span></code></pre></div><p>You can also pass the <code>.hdr</code> file directly:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">Environment</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">files</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;/sunset.hdr&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">Environment</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">files</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;/sunset.hdr&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> /&gt;</span></span></code></pre></div><p><img${ssrRenderAttr("src", _imports_1)} alt="Environment"></p><h2 id="texture-reference" tabindex="-1">Texture reference <a class="header-anchor" href="#texture-reference" aria-label="Permalink to &quot;Texture reference&quot;">​</a></h2><p>You can access the model reference by pasing a <code>ref</code> to the <code>&lt;Environment /&gt;</code> prop and then using the method <code>getTexture()</code> to get the object.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">setup</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">lang</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;ts&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { Environment } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#F97583" })}">let</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> envMap </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">null</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">environmentTexture</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">shallowRef</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">watch</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(environmentTexture, ({ </span><span style="${ssrRenderStyle({ "color": "#FFAB70" })}">getTexture</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> }) </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  envMap </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">getTexture</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">})</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">Environment</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">ref</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;environmentTexture&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresMesh</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresSphereGeometry</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresMeshStandardMaterial</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">:env-map</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;envMap&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresMesh</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">script</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">setup</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">lang</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;ts&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { Environment } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">let</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> envMap </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">null</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">environmentTexture</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">shallowRef</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">watch</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(environmentTexture, ({ </span><span style="${ssrRenderStyle({ "color": "#E36209" })}">getTexture</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> }) </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=&gt;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  envMap </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">getTexture</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">})</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">script</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">template</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">Environment</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">ref</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;environmentTexture&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresMesh</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresSphereGeometry</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> /&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresMeshStandardMaterial</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">:env-map</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;envMap&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresMesh</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#22863A" })}">template</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Prop</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th><th>Default</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>files</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Array of 6 urls to images, one for each side of the CubeTexture.</td><td><code>undefined</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>path</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Path to the environment map files.</td><td><code>undefined</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>encoding</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Encoding of the environment map.</td><td><code>SRGBColorSpace</code> for an array of files and <code>LinearEncoding</code> for a single texture</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>background</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">If <code>true</code>, the environment map will be used as the scene background.</td><td><code>false</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>blur</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Blur factor between 0 and 1. (only works with three 0.146 and up)</td><td>0</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>preset</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Preset environment map.</td><td><code>undefined</code></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/staging/environment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const environment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  environment as default
};
