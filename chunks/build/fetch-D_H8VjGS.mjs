import { _ as _plugin_vue_export_helper_default, u as useRuntimeConfig } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-Bdf3Ot5y.mjs';
import { withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';

//#region app/pages/fetch.vue
var _sfc_main = {
	__name: "fetch",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const config = useRuntimeConfig();
		const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://news0920.microcms.io/api/v1/news", { headers: { "X-MICROCMS-API-KEY": config.public.apiKey } }, "$pLy5pzMzM4")), __temp = await __temp, __restore(), __temp);
		const items = computed(() => data.value?.contents || []);
		console.log(items.value);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<ul${ssrRenderAttrs(_attrs)} data-v-a0e6086e><!--[-->`);
			ssrRenderList(unref(items), (item) => {
				_push(`<li data-v-a0e6086e>${ssrInterpolate(item.title)} ${ssrInterpolate(item.body)}</li>`);
			});
			_push(`<!--]--></ul>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fetch.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var fetch_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-a0e6086e"]]);

export { fetch_default as default };
//# sourceMappingURL=fetch-D_H8VjGS.mjs.map
