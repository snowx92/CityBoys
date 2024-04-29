$(document).ready(function() {
    $('#emailForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the form data
        var email = $('#email').val();
        var subject = 'Website Subscription';
        var body = 'Thank you for subscribing!';

        // Construct the mailto link
        var mailtoLink = 'mailto:cityboysfilms@gmail.com';
        mailtoLink += '?subject=' + encodeURIComponent(subject);
        mailtoLink += '&body=' + "Email:" + encodeURIComponent(email);

        // Open the mailto link in a new window or tab
        window.location.href = mailtoLink;

        // Show a toast notification (optional)
        toastr.success('Thank you for subscribing!', 'Success', {
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right',
            timeOut: 5000, // 5 seconds
            extendedTimeOut: 2000 // 2 seconds after mouseout
        });

        // Clear the form (optional)
        $(this)[0].reset();
    });
});
