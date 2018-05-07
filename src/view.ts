import { a, div, h1, h2, p } from 'react-dom-factories'
import { style } from 'typestyle'

// const border = style({
//   border: '1px',
// })

const sideNavLink = style({
  display: 'block',
  // padding: '6px 8px 6px 16px',
  margin: '6px 8px 6px 8px',
})

const headerLink = style({
  display: 'inline-block',
  margin: '6px 8px',
})

const sideNavWidth = '65px'

const View: React.SFC = () =>
  div({ className: 'container-fluid' },
    div({ className: 'row' },

      // Sidenav
      div({
        className: `${style(
          {
            backgroundColor: 'white',
            borderRight: '1px solid rgb(0, 0, 0, 0.1)',
            height: '100%',
            left: 0,
            overflowX: 'hidden',
            paddingTop: '10px',
            position: 'fixed',
            top: 0,
            width: sideNavWidth,
            zIndex: 1,
          })}
          d-flex flex-column`,
      },
        a({ className: `${sideNavLink} btn btn-primary btn-sm`, href: '#about' }, 'Ab'),
        a({ className: `${sideNavLink} btn btn-primary btn-sm`, href: '#services' }, 'Se'),
        a({ className: `${sideNavLink} btn btn-primary btn-sm`, href: '#clients' }, 'Cl'),
        a({ className: `${sideNavLink} btn btn-primary btn-sm`, href: '#contact' }, 'Co'),
      ),

      // Main Content
      div({
        className: style(
          {

          },
        ),
      },

        // Header
        div({
          className: style(
            {
              backgroundColor: 'white',
              borderBottom: '1px solid rgb(0, 0, 0, 0.1)',
              overflow: 'hidden',
              position: 'fixed',
              top: 0,
              width: '100%',
            }),
        },
          div({
            className: style(
              {
                marginLeft: sideNavWidth,
                overflowX: 'scroll',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
              }),
          },
            a({ className: `${headerLink} btn btn-primary btn-sm`, href: '#first' }, 'First'),
            a({ className: `${headerLink} btn btn-primary btn-sm`, href: '#second' }, 'Second'),
            a({ className: `${headerLink} btn btn-primary btn-sm`, href: '#third' }, 'Third'),
            a({ className: `${headerLink} btn btn-primary btn-sm`, href: '#fourth' }, 'Fourth'),
          ),
        ),

        // Body
        div({
          className: style(
            {
              marginLeft: sideNavWidth,
              marginTop: '40px',
              padding: '0 10px',
            },
          ),
        },
          h1({ className: 'bd-title' }, 'Choose Your Race'),
          p({ className: 'bd-lead' },
            `This example is a quick exercise to illustrate how the default,
           static navbar and fixed to top navbar work. It includes the responsive
           CSS and HTML, so it also adapts to your viewport and device.`,
          ),
          h2({ className: 'bd-title' }, 'More On The Race Thing...'),
          p({},
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.`,
          ),
          h2({ className: 'bd-title' }, 'And Another Thing...'),
          p({},
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.`,
          ),
          h2({ className: 'bd-title' }, 'One Final Thought...'),
          p({},
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.`,
          ),
          p({},
            a({ className: 'btn btn-primary', href: '#', role: 'button' }, 'Some Button »'),
          ),
        ),
      ),

      // Footer
      div({},
      ),
    ),
  )
// div({ className: `container ${style({ background: '#eee' })}` },
//   div({ className: 'row h-100' },
//     // div({ className: `col-1 d-flex align-self-center ${style({ border: '1px' })}` },
//     //   'Sidebar',
//     // ),
//     div({ className: 'd-flex flex-column' },
//       div({ className: 'row' },
//         'Topbar',
//       ),
//       div({ className: 'row h-100' },
//         div({ className: 'display-3' }, 'Main Content'),
//         div({ className: 'display-4' }, 'What is Lorem Ipsum'),
//         div({},
//           `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//            when an unknown printer took a galley of type and scrambled it to make a type
//            specimen book. It has survived not only five centuries, but also the leap into
//            electronic typesetting, remaining essentially unchanged. It was popularised in
//            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
//            and more recently with desktop publishing software like Aldus PageMaker including
//            versions of Lorem Ipsum.`,
//         ),
//       ),
//       div({ className: 'row' },
//         'Bottombar',
//       ),
//     ),
//   ),
// )

export default View
