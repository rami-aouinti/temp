<script setup lang="ts">
import { mergeProps } from 'vue'

const theme = useTheme()
const drawer = useState('drawer')
const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .filter((item) => item.meta && item.meta.title)
    .map((r) => ({
      title: r.meta.title!,
      disabled: r.path === route.path || false,
      to: r.path,
    }))
})
const isDark = computed({
  get() {
    return theme.global.name.value === 'dark' ? true : false
  },
  set(v) {
    theme.global.name.value = v ? 'dark' : 'light'
  },
})

function back() {
  window.history.back()
}
function refresh() {
  window.location.reload()
}
const canGoBack = ref(false)
const router = useRouter()
router.afterEach(() => {
  // @ts-expect-error Experimental https://developer.mozilla.org/en-US/docs/Web/API/Navigation
  canGoBack.value = window.navigation.canGoBack
})
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

const { loggedIn, clear, user } = useUserSession()
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <div class="d-none d-sm-flex align-center">
      <v-btn
        v-tooltip="{ text: 'Go Back' }"
        :disabled="!canGoBack"
        icon="ph:arrow-left"
        @click="back()"
      />
      <v-btn icon="ph:arrow-clockwise" @click="refresh()" />
      <v-breadcrumbs :items="breadcrumbs" />
    </div>
    <v-spacer />
    <div id="app-bar" />
    <v-btn
      v-tooltip="`${isFullscreen ? 'Minimize' : 'Maximize'}`"
      style="height: 31px; padding-top: 1px"
      :icon="isFullscreen ? 'ph:corners-in' : 'ph:corners-out'"
      @click="toggleFullscreen()"
    />
    <v-switch
      v-model="isDark"
      color=""
      hide-details
      density="compact"
      inset
      false-icon="mdi-white-balance-sunny"
      true-icon="mdi-weather-night"
      class="opacity-80"
    />
    <v-btn
      icon
      href="https://github.com/kingyue737/vitify-nuxt"
      size="small"
      class="ml-2"
      target="_blank"
    >
      <v-icon size="30" icon="mdi-github" />
    </v-btn>
    <v-menu location="bottom">
      <template #activator="{ props: menu }">
        <v-tooltip location="bottom">
          <template #activator="{ props: tooltip }">
            <v-btn icon v-bind="mergeProps(menu, tooltip)" class="ml-1">
              <v-icon v-if="!loggedIn" icon="mdi-account-circle" size="36" />
              <v-avatar v-else color="primary" size="36">
                <v-img :src="user?.avatar_url" />
              </v-avatar>
            </v-btn>
          </template>
          <span>{{ loggedIn ? user!.login : 'User' }}</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-if="!loggedIn"
          title="Login"
          prepend-icon="mdi-github"
          href="/api/auth/github"
        />
        <v-list-item
          v-else
          title="Logout"
          prepend-icon="mdi-logout"
          @click="clear"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
