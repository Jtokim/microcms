import { u as useRuntimeConfig } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-Bdf3Ot5y.mjs';
import { computed } from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

//#region node_modules/nuxt-microcms-module/dist/runtime/composables/useMicroCMSUrl.js
var VERSION = "v1";
var useMicroCMSUrl = () => {
	const config = useRuntimeConfig();
	return `https://${config.microCMS ? config.microCMS.serviceDomain : config.public.microCMS.serviceDomain}.microcms.io/api/${VERSION}`;
};
//#endregion
//#region node_modules/nuxt-microcms-module/dist/runtime/composables/useMicroCMSGet.js
var method = "get";
var useMicroCMSGet = ({ url, queries }, fetchOptions = {}) => {
	const baseURL = useMicroCMSUrl();
	const config = useRuntimeConfig();
	const query = computed(() => queries ? {
		...queries,
		fields: queries.fields?.toString(),
		ids: queries.ids?.toString()
	} : void 0);
	return useFetch(url, {
		...fetchOptions,
		baseURL,
		query,
		headers: {
			"X-MICROCMS-API-KEY": config.microCMS ? config.microCMS.apiKey : config.public.microCMS.apiKey,
			...fetchOptions.headers
		},
		method
	});
};
var useMicroCMSGetList = ({ endpoint, queries }, fetchOptions = {}) => {
	return useMicroCMSGet({
		url: endpoint,
		queries
	}, fetchOptions);
};
var useMicroCMSGetListDetail = ({ endpoint, contentId, queries }, fetchOptions = {}) => {
	return useMicroCMSGet({
		url: `${endpoint}/${contentId}`,
		queries
	}, fetchOptions);
};
//#endregion
//#region app/utils/dateFormat.ts
dayjs.extend(utc);
dayjs.extend(timezone);
var dateFormat = (date) => dayjs.utc(date).tz("Asia/Tokyo").format("YYYY年MM月DD日");

export { useMicroCMSGetList as a, dateFormat as d, useMicroCMSGetListDetail as u };
//# sourceMappingURL=dateFormat-FAfP7jIr.mjs.map
