import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { a as useMicroCMSGetList, d as dateFormat } from './dateFormat-FAfP7jIr.mjs';
import { N as NuxtLink } from './nuxt-link-C06v_vkx.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/utils';
import '../routes/renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import './fetch-Bdf3Ot5y.mjs';
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';
import 'dayjs';
import 'dayjs/plugin/utc.js';
import 'dayjs/plugin/timezone.js';

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data } = ([__temp, __restore] = withAsyncContext(() => useMicroCMSGetList({ endpoint: "blogs" })), __temp = await __temp, __restore(), __temp);
		console.log(data);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<!--[--><h1 class="text-center font-sans text-4xl font-semibold" data-v-9c8744c6> Nuxt3 Jamstack Blog</h1><ul class="mt-16 grid grid-cols-1 gap-8" data-v-9c8744c6><!--[-->`);
			ssrRenderList(unref(data)?.contents, (blog) => {
				_push(`<li data-v-9c8744c6>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/${blog.id}`,
					class: "flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<img${ssrRenderAttr("src", blog.eyecatch?.url)}${ssrRenderAttr("width", blog.eyecatch?.width)}${ssrRenderAttr("height", blog.eyecatch?.height)} class="md:w-1/3 md:flex-none" alt="" data-v-9c8744c6${_scopeId}><div class="md:p-2.5 md:pr-0" data-v-9c8744c6${_scopeId}><div class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600" data-v-9c8744c6${_scopeId}>${ssrInterpolate(blog.category?.name)}</div><div class="mt-2 text-lg font-semibold md:text-xl" data-v-9c8744c6${_scopeId}>${ssrInterpolate(blog.title)}</div><div class="mt-1 text-sm text-gray-700" data-v-9c8744c6${_scopeId}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(blog.publishedAt ?? blog.createdAt))}</div></div>`);
						else return [createVNode("img", {
							src: blog.eyecatch?.url,
							width: blog.eyecatch?.width,
							height: blog.eyecatch?.height,
							class: "md:w-1/3 md:flex-none",
							alt: ""
						}, null, 8, [
							"src",
							"width",
							"height"
						]), createVNode("div", { class: "md:p-2.5 md:pr-0" }, [
							createVNode("div", { class: "inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600" }, toDisplayString(blog.category?.name), 1),
							createVNode("div", { class: "mt-2 text-lg font-semibold md:text-xl" }, toDisplayString(blog.title), 1),
							createVNode("div", { class: "mt-1 text-sm text-gray-700" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(blog.publishedAt ?? blog.createdAt)), 1)
						])];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			});
			_push(`<!--]--></ul><!--]-->`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9c8744c6"]]);

export { pages_default as default };
//# sourceMappingURL=pages-C5jwH8yX.mjs.map
