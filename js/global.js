/**
 * Created by john on 15/5/10.
 */

$(function(){

    $(document).on('click', 'a[data-tab]', function(){
        var url = this.hash.replace('#', '');
        var tab = $(this).data('tab');
        var frame = $(this).data('target') == 'frame';
        var title = $.trim($(this).text());

        var $tabPanel = parent.$('#' + tab + '-tab');

        if ($tabPanel.tabs('exists', title)) {
            $tabPanel.tabs('select', title);
        } else {
            var options = {
                title: title,
                closable:true
            };

            !frame ? options.href = url : options.content = '<iframe src="' + url + '" frameborder="0" style="width: 100%; height: 500px" scrolling="yes"></iframe>';

            $tabPanel.tabs('add', options);
        }
    })

})
