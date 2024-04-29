$(document).ready(function() {
    $('#emailForm1').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        // Get form data
        var formData = new FormData(this);

        // Construct mailto link
        var mailtoLink = 'mailto:cityboysfilms@gmail.com';
        mailtoLink += '?subject=' + encodeURIComponent(formData.get('subject') || 'Website Subscription');
        mailtoLink += '&body=Full Name: ' + encodeURIComponent(formData.get('fullName') || '') + '%0A';
        mailtoLink += 'Email: ' + encodeURIComponent(formData.get('email') || '') + '%0A';
        mailtoLink += 'Phone Number: ' + encodeURIComponent(formData.get('phoneNumber') || '') + '%0A';
        mailtoLink += 'Another Phone Number: ' + encodeURIComponent(formData.get('altPhoneNumber') || '') + '%0A';
        mailtoLink += 'Message: ' + encodeURIComponent(formData.get('message') || '');

        // Open the mailto link
        window.location.href = mailtoLink;

        // Show Toastr notification
        toastr.success('Thank you for contacting us!', 'Success', {
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