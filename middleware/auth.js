import Cookies from 'js-cookie'
export default function (context) {
  if (!Cookies.get('token')) {
    return context.redirect('/login')
  }
}
