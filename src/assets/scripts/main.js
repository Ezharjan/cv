import 'focus-visible'
import $ from 'jquery'
import { set } from 'lodash'

document.documentElement.classList.remove('no-js')

// Scroll State
// const onScroll = () => {
const AlwaysShowBtns = () => {
    const scrollClassName = 'js-scrolled'
    const scrollTreshold = 200
    const isOverTreshold = window.scrollY > scrollTreshold

    document.documentElement.classList.add(scrollClassName)
    // if (isOverTreshold) {
    //     document.documentElement.classList.add(scrollClassName)
    // } else {
    //     document.documentElement.classList.remove(scrollClassName)
    // }
}
// window.addEventListener('scroll', onScroll, { passive: true })
AlwaysShowBtns()

// Print Button -->directly added in its own tag
// const printButton = document.querySelector('.js-print')
// printButton.addEventListener('click', () => {
//     window.print()
// })



$(document).ready(function () {
    //为超链接加上target='_blank'属性
    $('a[href^="http"]').each(function () {
        $(this).attr('target', '_blank')
    })
})
