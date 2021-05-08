<template>
	<section class="hero is-success">
		<div class="hero-head">
			<header class="navbar">
				<div class="container">
					<div class="navbar-st	art">
						<div class="navbar-item">
							<strong>📻 Platzi Music</strong>
						</div>
					</div>
					<div class="navbar-end navbar-menu">
						<a @click="selectLang('en')" class="navbar-item">🇺🇸</a>
						<a @click="selectLang('es')" class="navbar-item">🇪🇸</a>
						<router-link class="navbar-item" to="/">{{
							$t("search")
						}}</router-link>
						<router-link class="navbar-item" to="about">{{
							$t("about")
						}}</router-link>
					</div>
				</div>
			</header>
		</div>
		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">Platzi Music</h1>
				<h2 class="subtitle">Canciones que estan Vue-nisimas!</h2>
				<Player />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		selectLang(lang) {
			this.$i18n.locale = lang;
		}
	}
};
</script>
