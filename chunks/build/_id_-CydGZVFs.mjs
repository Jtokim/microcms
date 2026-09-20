import { _ as _plugin_vue_export_helper_default, a as useRoute$1 } from '../virtual/entry.mjs';
import { u as useMicroCMSGetListDetail, d as dateFormat } from './dateFormat-FAfP7jIr.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/[id].vue?vue&type=script&setup=true&lang.ts
var _id__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[id]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { params } = useRoute$1();
		const { data } = ([__temp, __restore] = withAsyncContext(() => useMicroCMSGetListDetail({
			endpoint: "blogs",
			contentId: Array.isArray(params.id) ? params.id[0] : params.id
		})), __temp = await __temp, __restore(), __temp);
		console.log(data);
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(data)) _push(`<!--[--><h1 class="text-3xl font-semibold" data-v-d668ac60>${ssrInterpolate(unref(data).title)}</h1><img${ssrRenderAttr("src", unref(data).eyecatch?.url)}${ssrRenderAttr("width", unref(data).eyecatch?.width)}${ssrRenderAttr("height", unref(data).eyecatch?.height)} alt="" class="mt-6 md:mt-10" data-v-d668ac60><div class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4" data-v-d668ac60><div class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600" data-v-d668ac60>${ssrInterpolate(unref(data).category?.name)}</div><div class="text-sm text-gray-700" data-v-d668ac60>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(unref(data).publishedAt ?? unref(data).createdAt))}</div></div><div class="prose mt-6 md:mt-10" data-v-d668ac60>${unref(data).content ?? ""}</div><!--]-->`);
			else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/pages/[id].vue
var _sfc_setup = _id__vue_vue_type_script_setup_true_lang_default.setup;
_id__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_id__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-d668ac60"]]);

export { _id__default as default };
//# sourceMappingURL=_id_-CydGZVFs.mjs.map
