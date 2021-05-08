import Vue from "vue";

Vue.directive("blur", (el, binding) => {
	el.style.filter = !binding.value ? "blur(3px)" : "(none)";
	el.style.cursor = !binding.value ? "not-allowed" : "pointer";
});
