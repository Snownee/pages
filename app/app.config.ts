import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Snownee\'s Personal Website',
    description:
      ' ',
    project: {
      links: {
        github: ''
      }
    },
    layout: {
      page: {
        navbar: {
          menus: [
            // { type: 'link', title: 'Blank', to: { name: 'blank' } },
            // { type: 'link', title: 'Post', to: { name: 'post' } },
            // { type: 'link', title: 'Test', to: { name: 'test' } },
            // {
            //   type: 'dropdown',
            //   title: 'Documentations',
            //   children: [
            //     {
            //       type: 'link',
            //       title: 'Components',
            //       to: { name: 'docs-components' },
            //     },
            //   ],
            // },
            // { type: 'button', title: 'Setting', to: { name: 'setting' } },

            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Snownee.com is&nbsp;under construction',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Join Discord',
          to: 'https://discord.gg/KzGQW7a',
        },
        secondaryActionButton: {
          title: 'Go to GitHub',
          to: 'https://github.com/Snownee',
        },
      },
    },
    author: {
      name: 'Snownee',
      links: {
        github: 'https://github.com/Snownee',
      },
    },
  },
})
