$(document).on('click', '.project-filter li', function () {
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});