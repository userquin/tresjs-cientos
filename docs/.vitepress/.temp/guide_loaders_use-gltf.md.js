import { _ as _sfc_main$1 } from "./GLTFModelDemo.77799e4a.js";
import { _ as __unplugin_components_0 } from "./DocsDemo.b6cdbb3e.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "@tresjs/core";
import "three";
import "tweakpane";
const __pageData = JSON.parse('{"title":"useGLTF","description":"","frontmatter":{},"headers":[],"relativePath":"guide/loaders/use-gltf.md","filePath":"guide/loaders/use-gltf.md"}');
const _sfc_main = { name: "guide/loaders/use-gltf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DocsDemo = __unplugin_components_0;
  const _component_GLTFModelDemo = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="usegltf" tabindex="-1">useGLTF <a class="header-anchor" href="#usegltf" aria-label="Permalink to &quot;useGLTF&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_DocsDemo, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GLTFModelDemo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_GLTFModelDemo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>A composable that allows you to easily load glTF models into your <strong>TresJS</strong> scene.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { useGLTF } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">scene</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">useGLTF</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;/models/AkuAku.gltf&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { useGLTF } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">scene</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">useGLTF</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;/models/AkuAku.gltf&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">)</span></span></code></pre></div><p>Then is as straightforward as adding the scene to your scene:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresCanvas</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">shadows</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">alpha</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">Suspense</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">primitive</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">:object</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&quot;scene&quot;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">Suspense</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#FDAEB7", "font-style": "italic" })}">TresCanvas</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresCanvas</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">shadows</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">alpha</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">Suspense</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#24292E" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">primitive</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">:object</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">=</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&quot;scene&quot;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">Suspense</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#B31D28", "font-style": "italic" })}">TresCanvas</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">&gt;</span></span></code></pre></div><p>An advantage of using <code>useGLTF</code>is that you can pass a <code>draco</code> prop to enable <a href="https://threejs.org/docs/index.html?q=drac#examples/en/loaders/DRACOLoader" target="_blank" rel="noreferrer">Draco compression</a> for the model. This will reduce the size of the model and improve performance.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { useGLTF } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> { </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">scene</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> } </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">await</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">useGLTF</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">&#39;/models/AkuAku.gltf&#39;</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">, { draco: </span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">true</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { useGLTF } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">from</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;@tresjs/cientos&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">const</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> { </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">scene</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> } </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">=</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">await</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">useGLTF</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">(</span><span style="${ssrRenderStyle({ "color": "#032F62" })}">&#39;/models/AkuAku.gltf&#39;</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">, { draco: </span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">true</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> })</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>draco</strong></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to enable Draco compression.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><strong>decoderPath</strong></td><td><code>string</code></td><td><code>undefined</code></td><td>Local path to the Draco decoder.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/loaders/use-gltf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useGltf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useGltf as default
};
