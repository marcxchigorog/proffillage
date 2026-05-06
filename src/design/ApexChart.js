import { computed } from 'vue'
import { useTheme } from 'vuetify'

export function useApexTheme() {
  const theme = useTheme()

  const isDark = computed(() => theme.global.current.value.dark)

  const colors = computed(() => {
    const c = theme.global.current.value.colors
    return [
      c.primary,
      c.secondary,c.success,c.warning,
      c.error,c.info
    ]
  })

  const apexTheme = computed(() => ({
    theme: {
      mode: isDark.value ? 'dark' : 'light'
    },
    chart: {
      background: 'transparent',
      foreColor: theme.global.current.value.colors['on-surface']
    },
    colors: colors.value,
    grid: {
      borderColor: theme.global.current.value.colors['surface-variant']
    },
    tooltip: {
      theme: isDark.value ? 'dark' : 'light'
    }
  }))

  return { apexTheme }
}

