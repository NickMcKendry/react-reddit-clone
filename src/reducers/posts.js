import { SET_POSTS } from '../components/actions'


export default function Posts(state = [], action = {}){
  switch(action.type){
    case SET_POSTS:
      return action.posts
    default: return state;
  }
}
