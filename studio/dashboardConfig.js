export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61b1f7865d82174d525398b8',
                  title: 'Sanity Studio',
                  name: 'last-call-studio',
                  apiId: '626b5a4b-7549-4bcf-b2ff-e69e1cf6ce96'
                },
                {
                  buildHookId: '61b1f7865554723c3484e7b2',
                  title: 'Blog Website',
                  name: 'last-call-web',
                  apiId: 'dad97927-929b-46ef-a0c1-e139c279c4ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xvburak/last-call',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://last-call-web.netlify.app', category: 'apps'}
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
