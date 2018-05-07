
// tslint:disable:no-submodule-imports

// react
import { createElement as r } from 'react'
import { render } from 'react-dom'
import RootUi from './view'
// import { BrowserRouter as Router, NavLink } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import { createStore, Store} from 'redux'
// import { createEpicMiddleware, Epic } from 'redux-observable'

// rxjs
// import { Observable } from 'rxjs'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/mergeMap'
// import { ajax } from 'rxjs/observable/dom/ajax'

// typestyle
// import { style } from 'typestyle'

// model
interface User {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string,
}

interface State {
  users: User[]
}

// action
type Action =
  | { type: 'FETCH_USERS' }
  | { payload: User[], type: 'FETCH_USERS_FULFILLED' }

// reducers
const users = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

interface RootProps {
  store: Store<State>
}

// tslint:disable-next-line:no-shadowed-variable
const Root: React.SFC<RootProps> = ({ store }) =>
  r(Provider, { store },
    r(RootUi),
  )

const initialState: State = {
  users: [],
}

const store = createStore(users, initialState)

// render
render(
  r(Root, { store }),
  document.getElementById('root'),
)
