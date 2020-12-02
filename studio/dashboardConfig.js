export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fc6f811328be6b8306ae90a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-syo7qaid',
                  apiId: 'bb349eaf-6ff5-4f84-aedf-a9af76c1fa2f'
                },
                {
                  buildHookId: '5fc6f811639961b4a5e5cb6d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hxgr31ww',
                  apiId: '5481dd19-8674-4ad0-aafe-e7fea8a21872'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hxgr31ww.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
