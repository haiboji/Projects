export default {
  register: () =>
    import('@/view/Register'),
  overview: () =>
    import('@/view/Overview'),
  success: () =>
    import('@/view/Success'),
  error: () =>
    import('@/view/Error')
}
