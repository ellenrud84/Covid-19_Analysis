<script type= "text/javascript">
    $(document).ready(function () {
        // $('#sidebar').mCustomScrollBar({
        //     theme:"minimal"
        // });
        
        // $('#dismiss, .overlay').on('click', function () {
        //     // hide sidebar
        //     $('sidebar').removeClass('active');
        //     $('.overlay').removeClass('active'):
        // });

        $('sidebarCollapse').on('click',function(){
            // toggle sidebar
            $('#sidebar').toggleClass('active');
            // fade in the overlay
            // $('.overlay').addClass('active');
            // $('.collapse.in').toggleClass('in');
            // // and also adjust aria-expanded attributes we use of hte open/closed arrows in our CSS
            // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        })
    })
</script>