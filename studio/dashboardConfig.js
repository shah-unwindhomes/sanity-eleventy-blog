export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d94303e432d7e5d11fd0c2',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-kqz25daj',
                  apiId: '70dc16b8-ec72-4749-8e43-bd298f9b7ec2'
                },
                {
                  buildHookId: '61d94304df034f1670e0ffb7',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5wnmvwa2',
                  apiId: '27690f72-5066-41b6-96cd-689624f7afe4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shah-unwindhomes/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5wnmvwa2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
