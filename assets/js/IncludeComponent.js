$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'component/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})