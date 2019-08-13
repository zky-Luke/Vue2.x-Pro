/**
 * DATEFORMAT
 * 日期格式化(YMDH、MDH、MD)
 */

Vue.filter('dateFormat', function (value, type) {
  if (!value) { return '' }
  let date = new Date(value)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let mm = date.getMinutes()
  switch (type) {
    case 'YMD':
      let ymdString = y + '-' + m + '-' + d
      return ymdString
    case 'YMDH':
      let ymdhString = y + '-' + m + '-' + d + ' ' + h + ':' + mm
      return ymdhString
    case 'MDH':
      let mdhString = m + '-' + d + ' ' + h + ':' + mm
      return mdhString
    case 'MD':
      let mdString = m + '-' + d
      return mdString
  }
})
