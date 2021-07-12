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
                  buildHookId: '60ec7d355500d3a8966c52c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bsk2pvjm',
                  apiId: '3d33d874-0a81-471a-adc1-e134f1a01c6b'
                },
                {
                  buildHookId: '60ec7d375500d3a2d36c5381',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5uftpr1n',
                  apiId: 'a7bd799d-b7bb-4959-993f-fc5b1e297fb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ixora-vc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5uftpr1n.netlify.app',
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
